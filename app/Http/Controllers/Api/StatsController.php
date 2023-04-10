<?php

namespace App\Http\Controllers\Api;

use App\Models\Tag;
use App\Models\Post;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StatsController extends Controller
{
    public function index(Request $request){

        $data = Post::withCount('tag')->orderBy('tag_count', 'desc')->get();

        return response()->json([
            'status' => true,
            'message' => 'List fetched',
            'data' => $data
        ], 200);
    }

}
