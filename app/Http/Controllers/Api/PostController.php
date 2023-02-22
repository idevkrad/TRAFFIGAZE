<?php

namespace App\Http\Controllers\Api;

use App\Models\Tag;
use App\Models\Post;
use App\Models\PostLike;
use App\Models\PostReport;
use App\Models\PostComment;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Http\Resources\PostResource;
use Illuminate\Support\Facades\Validator;
use App\Events\PostBroadcast;
use App\Events\ReactBroadcast;
use App\Http\Resources\ReactResource;

class PostController extends Controller
{
    public function index(){
        $data = Post::latest()->paginate(10);
        PostResource::collection($data);
        return response()->json([
            'status' => true,
            'message' => 'List fetched',
            'data' => $data
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
                $coordinates = [];
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
            $data = PostLike::create($request->all());
            $message = 'liked';
            broadcast(new PostBroadcast(new PostResource($data),'like'));
        }else{
            PostLike::where('user_id',$user_id)->where('post_id',$post_id)->delete();
            $message = 'unliked';
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
            PostComment::create($request->all());
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
            PostReport::create($request->all());
        }else{
            return response()->json([
                'status' => true,
                'message' => '1 report allowed only'
            ], 200);
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

}
