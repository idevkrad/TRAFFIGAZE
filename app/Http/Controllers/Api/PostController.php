<?php

namespace App\Http\Controllers\Api;

use App\Models\Tag;
use App\Models\Post;
use App\Models\PostLike;
use App\Models\PostReport;
use App\Models\PostComment;
use App\Models\LocationBarangay;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Http\Resources\PostResource;
use Illuminate\Support\Facades\Validator;
use App\Events\PostBroadcast;
use App\Events\MapBroadcast;
use Carbon\Carbon;
use App\Http\Resources\LikeResource;
use App\Http\Resources\ReportResource;
use App\Http\Resources\CommentResource;
use App\Http\Resources\LikeNotiResource;
use App\Http\Resources\CommentNotiResource;
use App\Http\Resources\ReportNotiResource;

class PostController extends Controller
{
    public function index(Request $request){

        if($request->type == 'barangay'){
            $barangay = $request->barangay;
            $data = Post::whereDate('created_at',now())
            ->when($barangay, function ($query, $barangay) {
                $query->where('barangay_id',$barangay);
            })
            ->orderBy('created_at','DESC')->get();
        }else if($request->type == 'profile'){
            $data = Post::where('user_id',$request->id)->orderBy('created_at','DESC')->get();
        }else if($request->type == 'latest'){
            $data = Post::whereDate('created_at',now())->orderBy('created_at','DESC')->get();
        }else if($request->type == 'all'){
            $data = Post::whereDate('created_at',now())->get();
        }else{
            $data = Post::withCount('likes')->whereDate('created_at',now())->orderBy('likes_count', 'desc')->get();
        }

        return response()->json([
            'status' => true,
            'message' => 'List fetched',
            'data' => PostResource::collection($data)
        ], 200);
    }

    public function store(Request $request){
        try {
            $data = \DB::transaction(function () use ($request){
                $validate = Validator::make($request->all(),[
                    'information' => 'required',
                    'image' => 'nullable|image64:jpeg,jpg,png',
                    'tag_id' => 'required',
                    'user_id' => 'required'
                ]);

                if($validate->fails()){
                    return response()->json([
                        'status' => false,
                        'message' => 'validation error',
                        'errors' => $validate->errors()
                    ], 401);
                }
                $imageName = null;
                $coordinates = json_decode($request->coordinates);
                if($request->image){
                    $dd = $request->image;
                    $img = explode(',', $dd);
                    $ini =substr($img[0], 11);
                    $type = explode(';', $ini);
                    if($type[0] == 'png'){
                        $image = str_replace('data:image/png;base64,', '', $dd);
                    }else{
                        $image = str_replace('data:image/jpeg;base64,', '', $dd);
                    }
                    $image = str_replace(' ', '+', $image);
                    $imageName =  date('Y').'-'.date('mhis').'.'.$type[0];
                    
                    if(\File::put(public_path('images/posts'). '/' . $imageName, base64_decode($image))){
                        //
                    }
                }
                $data = Post::create(array_merge($request->all(),['coordinates' => json_encode($coordinates), 'image' => $imageName]));
                return $data;
            });

            broadcast(new PostBroadcast(new PostResource($data),'post'));
            broadcast(new MapBroadcast(new PostResource($data),'post'));

            return response()->json([
                'status' => true,
                'message' => 'Post Submitted',
                'data' => new PostResource($data)
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function comment(Request $request){
        $user_id = $request->user_id;
        $post_id = $request->post_id;

        $count = PostComment::where('user_id',$user_id)->where('post_id',$post_id)->count();
        if($count == 0){
            $data = PostComment::create($request->all());
            $message = 'comment';
            $data = new CommentResource($data);
            broadcast(new PostBroadcast($data,$message));
            broadcast(new PostBroadcast(new CommentNotiResource($data),'notification'));
        }else{
            return response()->json([
                'status' => true,
                'message' => '1 comment allowed only'
            ], 200);
        }

        return response()->json([
            'status' => true,
            'message' => 'success'
        ], 200);
    }

    public function like(Request $request){
        $user_id = $request->user_id;
        $post_id = $request->post_id;

        $count = PostLike::where('user_id',$user_id)->where('post_id',$post_id)->count();
        if($count == 0){
            $like = PostLike::create($request->all());
            $data = PostLike::with('post','user')->where('id',$like->id)->first();
            $message = 'liked';
            broadcast(new PostBroadcast(new LikeResource($data),$message));
            broadcast(new PostBroadcast(new LikeNotiResource($data),'notification'));
            if($like){
                $unreport = PostReport::where('user_id',$user_id)->where('post_id',$post_id)->first();
                if($unreport){
                    $report_id = $unreport->id;
                    $unreport->delete();
                    $message = 'unreported';
                    $data2 = ['report_id' => $report_id, 'post_id' => $post_id];
                    broadcast(new PostBroadcast($data2,$message));
                }
            }
        }else{
            $unlike = PostLike::where('user_id',$user_id)->where('post_id',$post_id)->first();
            $like_id = $unlike->id;
            $unlike->delete();
            $message = 'unliked';
            $data = ['like_id' => $like_id, 'post_id' => $post_id];
            broadcast(new PostBroadcast($data,$message));
        }

        return response()->json([
            'status' => true,
            'message' => $message
        ], 200);
    }


    public function report(Request $request){
        $user_id = $request->user_id;
        $post_id = $request->post_id;

        $count = PostReport::where('user_id',$user_id)->where('post_id',$post_id)->count();
        if($count == 0){

            $report= PostReport::create($request->all());
            $data = PostReport::with('post','user')->where('id',$report->id)->first();
            $message = 'report';
            broadcast(new PostBroadcast(new ReportResource($data),$message));
            broadcast(new PostBroadcast(new ReportNotiResource($data),'notification'));

            if($report){
                $unlike = PostLike::where('user_id',$user_id)->where('post_id',$post_id)->first();
                if($unlike){
                    $like_id = $unlike->id;
                    $unlike->delete();
                    $message = 'unliked';
                    $data2 = ['like_id' => $like_id, 'post_id' => $post_id];
                    broadcast(new PostBroadcast($data2,$message));
                }

                // $message = 'report';
                // broadcast(new PostBroadcast(new ReportResource($data),$message));
            }
        }else{
            $unreported = PostReport::where('user_id',$user_id)->where('post_id',$post_id)->first();
            $report_id = $unreported->id;
            $unreported->delete();
            $message = 'unreported';
            $data = ['report_id' => $report_id, 'post_id' => $post_id];
            broadcast(new PostBroadcast($data,$message));
        }

        return response()->json([
            'status' => true,
            'message' => 'success'
        ], 200);
    }

    public function view($id){
        $data = Post::with('tag','user')->where('id',$id)->first();

        return response()->json([
            'status' => true,
            'message' => 'Post Submitted',
            'data' => new PostResource($data)
        ], 200);
    }

    public function lists(){
        $tags = Tag::all();
        $barangays = LocationBarangay::all();

        $data = [
            'tags' => $tags,
            'barangays' => $barangays
        ];

        return response()->json([
            'status' => true,
            'message' => 'Lists',
            'data' => $data
        ], 200);
    }

    public function location(Request $request){
    
        $apiURL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='.$request->lat.','.$request->lng.'&key=AIzaSyCG-k6UIxH8HXFQzZvuuya6S5hKuXhMP-c';
        $client = new \GuzzleHttp\Client();
        $response = $client->request('GET', $apiURL);
        $statusCode = $response->getStatusCode();
        $responseBody = json_decode($response->getBody(), true);

        return response()->json([
            'status' => true,
            'message' => 'location',
            'data' => $responseBody['results'][0]['formatted_address']
        ], 200);
    }

    public function notification(Request $request){
        $id = $request->id; 
        
        $likes = PostLike::with('post','user')->where('seened_by',0)
        ->whereHas('post',function ($query) use ($id){
           $query->where('user_id',$id);
        })->get();

        $comments = PostComment::with('post','user')->where('seened_by',0)
        ->whereHas('post',function ($query) use ($id){
           $query->where('user_id',$id);
        })->get();

        $reports = PostReport::with('post','user')->where('seened_by',0)
        ->whereHas('post',function ($query) use ($id){
           $query->where('user_id',$id);
        })->get();

        $array = [
            'likes' => LikeNotiResource::collection($likes),
            'comments' => CommentNotiResource::collection($comments),
            'reports' => ReportNotiResource::collection($reports)
        ];

        return $array;
    }

    public function viewNoti(Request $request){
        $type = $request->type;
        $post_id = $request->id;

        switch($type){
            case 'like':
                $data = PostLike::where('post_id',$post_id)->update(['seened_by' => 1]);
            break;
            case 'comment':
                $data = PostComment::where('post_id',$post_id)->update(['seened_by' => 1]);
            break;
            case 'report':
                $data = PostReport::where('post_id',$post_id)->update(['seened_by' => 1]);
            break;
        }
    }

    public function tag($id){
        $tag = Tag::where('id',$id)->first();
        $data = Post::where('tag_id',$id)->whereDate('created_at', Carbon::yesterday())->orderBy('created_at','DESC')->get();

        return response()->json([
            'status' => true,
            'message' => 'List fetched',
            'data' => [
                'tag' => $tag,
                'lists' => PostResource::collection($data)
            ]
        ], 200);
    }

    public function barangay($id){
        $tag = LocationBarangay::where('id',$id)->first();
        $data = Post::where('barangay_id',$id)->whereDate('created_at', Carbon::yesterday())->orderBy('created_at','DESC')->get();

        return response()->json([
            'status' => true,
            'message' => 'List fetched',
            'data' => [
                'tag' => $tag,
                'lists' => PostResource::collection($data)
            ]
        ], 200);
    }

    public function markall(Request $request){
        $id = $request->id;

        PostLike::whereHas('post',function ($query) use ($id) {
            $query->where('user_id',$id);
        })->update(['seened_by',1]);

        PostReport::whereHas('post',function ($query) use ($id) {
            $query->where('user_id',$id);
        })->update(['seened_by',1]);

        PostComment::whereHas('post',function ($query) use ($id) {
            $query->where('user_id',$id);
        })->update(['seened_by',1]);

        return response()->json([
            'status' => true,
            'message' => 'PSuccessfully',
            'data' => []
        ], 200);
    }

}
