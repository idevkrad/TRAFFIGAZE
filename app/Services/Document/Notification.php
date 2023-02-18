<?php

namespace App\Services\Document;

use App\Models\Document;
use App\Models\DocumentRouting;
use App\Models\ListKeyword;
use App\Http\Resources\DocumentResource;

class Notification {

    public function get(){
        // switch(\Auth::user()->role){
        //     case 'Employee':
        //         $statuses = [56,57,58]; //approved / disapproved
        //         $user = true;
        //     break;
        //     case 'Regional Director':
        //         $statuses = [56]; //recommended
        //         $user = false;
        //     break;
        // }

        $data = Document::with('sender','type','company','attachments','router','encoder','routings.user.profile')
        ->whereHas('routings',function ($query) {
            $query->where('is_seen_to',0)->where('route_to',\Auth::user()->id);
        })
        ->orderBy('created_at','ASC')->paginate(1)->withQueryString();
        return DocumentResource::collection($data);
    }

    public static function view($id,$actions){
        $query = DocumentRouting::query();
        $query->where('document_id',$id);
        $query->where('route_to',\Auth::user()->id);
        $query->update(['is_seen_to' => 1,'seened' => now()]);
        (in_array(86,json_decode($actions))) ? '' : $query->update(['is_completed' => 1,'completed' => now()]);

        if(in_array(86,json_decode($actions))){
            $count = DocumentRouting::where('document_id',$id)->where('is_completed',0)->count();
            if($count == 0){
                $data = Document::where('id',$id)->update(['is_completed' => 1]);
            }
        }else{
            $count = DocumentRouting::where('document_id',$id)->where('is_seen_to',0)->count();
            if($count == 0){
                $data = Document::where('id',$id)->update(['is_completed' => 1]);
            }
        }
        return true;
    }
    
}