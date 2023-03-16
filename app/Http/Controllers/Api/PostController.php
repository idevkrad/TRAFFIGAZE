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
use App\Http\Resources\LikeResource;
use App\Http\Resources\ReportResource;
use App\Http\Resources\CommentResource;

class PostController extends Controller
{
    public function index(Request $request){

        if($request->type == 'latest'){
            $data = Post::latest()->paginate(10);
        }else if($request->type == 'all'){
            $data = Post::latest()->get();
        }else{
            $data = Post::withCount('likes')->orderBy('likes_count', 'desc')->paginate(10);
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
                    'image' => 'nullable|mimes:jpeg,jpg,png',
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

            // dd($request->ip());
            // $coordinates = geoip()->getLocation('49.149.107.122');
            // return response()->json(['coor' => 'ui'], 200);
                $coordinates = $request->coordinates;
                $data = Post::create(array_merge($request->all(),['coordinates' => json_encode($coordinates)]));
                return $data;
            });

            broadcast(new PostBroadcast(new PostResource($data),'post'));

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

    public function like(Request $request){
        $user_id = $request->user_id;
        $post_id = $request->post_id;

        $count = PostLike::where('user_id',$user_id)->where('post_id',$post_id)->count();
        if($count == 0){
            $like = PostLike::create($request->all());
            $data = PostLike::with('post','user')->where('id',$like->id)->first();
            $message = 'liked';
            broadcast(new PostBroadcast(new LikeResource($data),$message));
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

    public function comment(Request $request){
        $user_id = $request->user_id;
        $post_id = $request->post_id;

        $count = PostComment::where('user_id',$user_id)->where('post_id',$post_id)->count();
        if($count == 0){
            $data = PostComment::create($request->all());
            $message = 'comment';
            $data = new CommentResource($data);
            broadcast(new PostBroadcast($data,$message));
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

    public function report(Request $request){
        $user_id = $request->user_id;
        $post_id = $request->post_id;

        $count = PostReport::where('user_id',$user_id)->where('post_id',$post_id)->count();
        if($count == 0){

            $report= PostReport::create($request->all());
            $data = PostReport::with('post','user')->where('id',$report->id)->first();
            $message = 'report';
            broadcast(new PostBroadcast(new ReportResource($data),$message));

            if($report){
                $unlike = PostLike::where('user_id',$user_id)->where('post_id',$post_id)->first();
                if($unlike){
                    $like_id = $unlike->id;
                    $unlike->delete();
                    $message = 'unliked';
                    $data2 = ['like_id' => $like_id, 'post_id' => $post_id];
                    broadcast(new PostBroadcast($data2,$message));
                }

                $message = 'report';
                broadcast(new PostBroadcast(new ReportResource($data),$message));
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

}
