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
}
