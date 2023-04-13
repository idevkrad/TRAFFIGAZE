<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;

class UserController extends Controller
{
    public function index(Request $request){
        $data =  User::where('is_admin',0)
        ->when($request->keyword, function ($query, $keyword) {
            $query->where('name','LIKE', "%{$keyword}%");
        })
        ->paginate($request->count);

        return response()->json([
            'status' => true,
            'message' => 'List fetched',
            'data' => UserResource::collection($data)
        ], 200);
    }

    public function admin(Request $request){
        $series[] = 
            [
                'name' => 'Posts',
                'data' => [Post::count()]
            ];
            $series[] = 
            [
                'name' => 'Posts',
                'data' => [Post::count()]
            ];
            $series[] = 
            [
                'name' => 'Posts',
                'data' => [Post::count()]
            ];
        $data = [
            'users' => User::count(),
            'posts' => Post::count(),
            'series' => $series
        ];

        return response()->json([
            'status' => true,
            'message' => 'List fetched',
            'data' => $data
        ], 200);
    }
}
