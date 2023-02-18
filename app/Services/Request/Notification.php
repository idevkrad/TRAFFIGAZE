<?php

namespace App\Services\Request;

use App\Models\Request as RequestModel;
use App\Http\Resources\RequestResource;

class Notification {

    public static function get($request) {
        switch(\Auth::user()->role){
            case 'Employee':
                $statuses = [56,57,58]; //approved / disapproved
                $user = true;
            break;
            case 'Assistant Regional Director':
                $statuses = [54,55]; //validated
                $user = false;
            break;
            case 'Regional Director':
                $statuses = [56]; //recommended
                $user = false;
            break;
        }

        $query = RequestModel::query();
        $query->with('type','status','user:id,avatar','user.profile:id,user_id,firstname,lastname,middlename','user.employee:id,user_id,position_id,department_id,office_id','user.employee.position','user.employee.department','user.employee.office');
        $query->with('cto','leave.detail','leave.type','leave.request');
        ($user) ? $query->where('user_id',\Auth::user()->id) : '';
        $query->whereIn('status_id',$statuses)->where('is_seened',0)->orderBy('created_at','ASC');
        $data = $query->get();
        
        return RequestResource::collection($data);
    }
    
}