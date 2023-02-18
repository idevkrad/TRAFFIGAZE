<?php

namespace App\Services\Request;

use App\Models\Request as RequestModel;
use App\Http\Resources\RequestResource;

class Lists {
    public static function get(){
        switch(\Auth::user()->role){
            case 'Employee':
                $statuses = [57,58]; //approved / disapproved
            break;
            case 'Assistant Regional Director':
                $statuses = [54,55]; //validated
            break;
            case 'Regional Director':
                $statuses = [56]; //recommended
            break;
        }
        $data = RequestModel::with('status','type','user:id,avatar','user.profile:id,user_id,firstname,lastname,middlename','user.employee:id,user_id,position_id,department_id,office_id','user.employee.position','user.employee.department','user.employee.office')
        ->with('cto','leave.detail','leave.type','leave.request')
        ->whereIn('status_id',$statuses)->orderBy('created_at','ASC')->get();
        return RequestResource::collection($data);
    } 

    public static function solo($request) {
        $data = RequestModel::with('status','type','user:id,avatar','user.profile:id,user_id,firstname,lastname,middlename','user.employee:id,user_id,position_id,department_id,office_id','user.employee.position','user.employee.department','user.employee.office')
        ->with('cto','leave.detail','leave.type','leave.request')
        ->when($request->status, function ($query, $status) {
            $query->where('status_id',$status);
        })
        ->when($request->request_type, function ($query, $type) {
            $query->where('request_type',$type);
        })
        ->where('user_id',\Auth::user()->id)
        ->orderBy('status_id','ASC')->orderBy('created_at','DESC')->paginate($request->count)->withQueryString();
        return RequestResource::collection($data);
    }

    public static function code($type){
        $year = date('Y');
        $month = date('m');
        
        switch($type){
            case 69:
                $word = "LEAVE";
            break;
            case 68:
                $word = "CTO";
            break;
        };       
        $count = RequestModel::where('request_type',$type)->count();
		return $code = $year."-".$word.''.$month.'-'.str_pad(($count+1), 4, '0', STR_PAD_LEFT);
    }

    public static function view($id){
        $data = RequestModel::where('id',$id)->update(['is_seened' => 1]);
        return true;
    }
    
}