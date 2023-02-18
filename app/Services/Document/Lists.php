<?php

namespace App\Services\Document;

use App\Models\Document;
use App\Models\DocumentRouting;
use App\Models\ListKeyword;
use App\Http\Resources\DocumentResource;
use App\Http\Resources\RoutingResource;

class Lists {

    public function solo($request) {
        $data = DocumentRouting::with('document')
        ->with('document.sender','document.type','document.company','document.attachments','document.router','document.encoder','document.routings.user.profile')
        ->where('route_to',\Auth::user()->id)
        ->orderBy('created_at','DESC')->paginate($request->count)->withQueryString();
        
        return RoutingResource::collection($data);
        // with('sender','type','company','attachments','router','encoder','routings.user.profile')
        // ->when($request->doc_type, function ($query, $type) {
        //     $query->where('type_id',$type);
        // })
        // ->when($request->sender, function ($query, $sender) {
        //     $query->whereHas('sender',function ($query) use ($sender) {
        //         $query->where('name', 'LIKE', "%{$sender}%");
        //     });
        // })
        // ->when($request->company, function ($query, $company) {
        //     $query->whereHas('company',function ($query) use ($company) {
        //         $query->where('name', 'LIKE', "%{$company}%");
        //     });
        // })
        // ->when($request->keyword, function ($query, $keyword) {
        //     $query->where('route_slip', 'LIKE', "%{$keyword}%");
        // })
        // ->whereHas('routings', function ($query) {
        //     $query->where('route_to',\Auth::user()->id);
        // })
        // ->orderBy('created_at','DESC')->paginate($request->count)->withQueryString();
        // return DocumentResource::collection($data);
    }

    public function get($request) {
        $data = Document::with('sender','type','company','attachments','router','encoder','routings.user.profile')
        ->when($request->doc_type, function ($query, $type) {
            $query->where('type_id',$type);
        })
        ->when($request->sender, function ($query, $sender) {
            $query->whereHas('sender',function ($query) use ($sender) {
                $query->where('name', 'LIKE', "%{$sender}%");
            });
        })
        ->when($request->company, function ($query, $company) {
            $query->whereHas('company',function ($query) use ($company) {
                $query->where('name', 'LIKE', "%{$company}%");
            });
        })
        ->when($request->keyword, function ($query, $keyword) {
            $query->where('route_slip', 'LIKE', "%{$keyword}%");
        })
        ->orderBy('created_at','DESC')->paginate($request->count)->withQueryString();
        return DocumentResource::collection($data);
    }

    public function keywords($request) {
        $data = \DB::transaction(function () use ($request){
            return $data = ListKeyword::create(array_merge($request->all(), ['added_by' => \Auth::user()->id]));
        });
        return $data;
    }

    public function search($request) {
        $keyword = $request->word;
        $is_company = $request->is_company;
        $data =  ListKeyword::where('name','LIKE','%'.$keyword.'%')->where('is_company',$is_company)->take(5)->get();
        return $data;
    }
    
}