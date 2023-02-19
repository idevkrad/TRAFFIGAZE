<?php

namespace App\Http\Controllers\Api;

use App\Models\Tag;
use App\Models\Post;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Http\Resources\PostResource;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    public function index(){

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


}
