<?php

namespace App\Http\Controllers\Modules;

use App\Models\Request as RequestModel;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Request\Lists;
use App\Services\Request\Notification;
use App\Http\Resources\RequestResource;

class RequestController extends Controller
{
    public function index(Request $request, Lists $lists){
        if($request->type == 'solo'){
            return $lists->solo($request); 
        }else if($request->type == 'admin'){
            return $lists->get(); 
        }else{
            return inertia('Modules/Request/Index');
        }
    }

    public function store(Request $request, Lists $lists){
        $data = \DB::transaction(function () use ($request,$lists){
            $code = $lists->code($request->request_type); 
            $data = RequestModel::create(array_merge($request->all(), ['code' => $code]));
            if($request->request_type == 69){
                $data->leave()->create($request->all());
            }else{
                $data->cto()->create(array_merge($request->all(), ['total' => '00:00:00', 'reports' => '[]','code' => $code,]));
            }
           
            $data = RequestModel::where('id',$data->id)->first();
            return $data;
        });


        return back()->with([
            'message' => 'Application was sent.',
            'data' => new RequestResource($data),
            'type' => 'bxs-check-circle'
        ]); 
    }

    public function show(Request $request, Notification $notification, Lists $lists){
       
        if($request->application == 'notifications'){
            return $notification->get($request); 
        }else{
            return $lists->view($request->application); 
        }
    }

    public function update(Request $request){
        $data = \DB::transaction(function () use ($request){
            $data = RequestModel::findOrFail($request->id);
            $data->update($request->all());
            $data->statuses()->create(array_merge($request->all(),['seened_by' => '[]','user_id' => \Auth::user()->id]));
            $data->is_seened = 0;
            $data->save();
            return $data = RequestModel::findOrFail($request->id);
        });

        return back()->with([
            'message' => 'Application Updated.',
            'data' => new RequestResource($data),
            'type' => 'bxs-check-circle'
        ]); 
    }
}
