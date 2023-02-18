<?php

namespace App\Services\Document;

use App\Models\User;
use App\Models\UserEmployee;
use App\Models\Document;
use App\Models\DocumentRouting;
use App\Jobs\NotifyMail;

class Route {

    public function store($request){
        $data = Document::findOrFail($request->id);
        $data->is_status = 1;
        $data->routed_by = \Auth::user()->id;
        $action = (in_array(86,json_decode($data->actions))) ? true : false;

        if($data->save()){
            $items = array();
            switch($request->option){
                case 'By Group':    
                    $groups = json_decode($request->groups);
                    $users = UserEmployee::whereIn('department_id',$groups)->pluck('user_id');
                    $this->users($request->id,$users,$action);
                break;
                case 'Individually':
                    $users = json_decode($request->individuals);
                    $this->users($request->id,$users,$action);
                    
                break;
                case 'All Employees':
                    $users = User::where('is_active',1)->where('id','!=',1)->pluck('id');
                    $this->users($request->id,$users,$action);
                break;
            };
        }
        return $data;
    }

    public function users($id,$users,$action)
    {  
        $items = array();
       
        foreach($users as $user){
            $count = DocumentRouting::where('document_id',$id)->where('route_to',$user)->count();

            if($count == 0){
                $item = [ 
                    'route_to' => $user,
                    'document_id' => $id,
                    'is_required' => 1,
                    'is_action' => $action,
                    'created_at'	=> now(),
                    'updated_at'	=> now()
                ];
                $items[] 	= $item;
                NotifyMail::dispatch($user,$id)->delay(now()->addSeconds(10));
                // NotifySms::dispatch($user,$id)->delay(now()->addSeconds(10));
            }
        }
        DocumentRouting::insert($items);
        $data = DocumentRouting::with('document','document.router')->where('document_id',$id)->first();
        // broadcast(new TraceEvent(new DocumentResource2($data)));
    }

    
}