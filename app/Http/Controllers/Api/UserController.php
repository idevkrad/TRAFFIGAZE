<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;

class UserController extends Controller
{
    public function index(){
        $data =  User::where('is_admin',0)->paginate(10);

        return response()->json([
            'status' => true,
            'message' => 'List fetched',
            'data' => UserResource::collection($data)
        ], 200);
    }
}
