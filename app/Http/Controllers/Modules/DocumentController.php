<?php

namespace App\Http\Controllers\Modules;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Document\Lists;
use App\Services\Document\Store;
use App\Services\Document\Route;
use App\Services\Document\Notification;
use App\Http\Requests\DocumentRequest;
use App\Http\Resources\DocumentResource;

class DocumentController extends Controller
{
    public function index(Request $request, Lists $lists){
        if($request->type == 'staff'){
            return $lists->get($request);
        }else if($request->type == 'solo'){
            return $lists->solo($request); 
        }else{
            return inertia('Modules/Document/Index');
        }
    }

    public function show(Request $request, Lists $lists, Notification $notification){
        if($request->document == 'lists'){
            return inertia('Modules/Document/Staff');
        }else  if($request->document == 'keywords'){
            return $lists->keywords($request);
        }else if($request->document == 'search'){
            return $lists->search($request);
        }else if($request->document == 'notifications'){
            return $notification->get($request);
        }else{
            return $notification->view($request->document,$request->actions); 
        }
    }

    public function store(DocumentRequest $request, Store $store){
        $data = \DB::transaction(function () use ($request,$store){
            return $store->data($request);
        });

        return back()->with([
            'message' => 'Document created successfully. Thanks',
            'data' => new DocumentResource($data),
            'type' => 'bxs-check-circle'
        ]); 
    }

    public function update(Request $request, Route $route){
        $validated = $request->validate([
            'option' => 'required',
            'groups' => 'required_if:option,==,By Group',
            'individuals' => 'required_if:option,==,Individually'
        ]);
        // dd($request->document);
        $data = \DB::transaction(function () use ($request, $route){
            if($request->document == 'route'){
                return $route->store($request);
            }
        });

        return back()->with([
            'message' => 'Document updated successfully. Thanks',
            'data' => new DocumentResource($data),
            'type' => 'bxs-check-circle'
        ]); 
    }
}
