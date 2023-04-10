<?php

namespace App\Http\Controllers\Api;

use App\Models\Tag;
use App\Models\Post;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StatsController extends Controller
{
    public function index(Request $request){

        $tags = Tag::withCount('posts')->orderBy('posts_count', 'desc')->get();

        foreach($tags as $tag){
            $series[] = $tag->posts_count;
            $names[] = $tag->name;
        }

        return response()->json([
            'status' => true,
            'message' => 'List fetched',
            'lists' => $tags,
            'data' => [
                'series' => $series,
                'labels' => $names
            ]
        ], 200);
    }

}
