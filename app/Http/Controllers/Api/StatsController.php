<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use App\Models\Tag;
use App\Models\Post;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StatsController extends Controller
{
    public function index(Request $request){
        $series = [];
        $names = [];

        $query = Tag::query();
        if($request->type == 'yesterday'){
            $query->whereHas('posts',function ($query) {
                $query->whereDate('created_at', Carbon::yesterday()); 
            });
        }
        $tags = $query->get();
        
        if($request->type == 'yesterday'){
            return response()->json([
                'status' => true,
                'message' => 'List fetched',
                'lists' => $tags
            ], 200);
        }else{
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

}
