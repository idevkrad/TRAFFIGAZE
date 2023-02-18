<?php

namespace App\Services\Employee;

use App\Models\User;
use App\Models\UserEmployee;
use App\Models\Request as RequestModel;
use App\Http\Resources\EmployeeResource;
use App\Http\Resources\IndividualResource;

class Lists {

   public static function get($request) {

        $data = UserEmployee::with('department','status','office','position','religion','level','bloodtype')
        ->with('user:id,avatar,email,username,role,is_active','user.profile:id,user_id,firstname,lastname,middlename,mobile,gender,birthday')
        ->when($request->office, function ($query, $office) {
            $query->where('office_id',$office);
        })
        ->when($request->department, function ($query, $department) {
            $query->where('department_id',$department);
        })
        ->when($request->status, function ($query, $status) {
            $query->where('status_id',$status);
        })
        ->when($request->department, function ($query, $department) {
            $query->where('department_id',$department);
        })
        ->when($request->keyword, function ($query, $keyword) {
            $query->whereHas('user',function ($query) use ($keyword) {
                $query->whereHas('profile',function ($query) use ($keyword) {
                    $query->where(\DB::raw('concat(firstname," ",lastname)'), 'LIKE', "%{$keyword}%")
                    ->orWhere(\DB::raw('concat(lastname," ",firstname)'), 'LIKE', "%{$keyword}%");
                })->orWhere(function ($query) use ($keyword) {
                    $query->where('email', 'LIKE', "%{$keyword}%")->whereNotIn('role',['Super Administrator']);
                });
            });
        })
        ->orderBy('status_id','ASC')->orderBy('created_at','DESC')->paginate($request->count)->withQueryString();
        return EmployeeResource::collection($data);
    }

    public static function individual($request){
        $keyword = $request->keyword;
        $data = User::with('profile')
        ->whereHas('profile',function ($query) use ($keyword) {
            $query->where(\DB::raw('concat(firstname," ",lastname)'), 'LIKE', "%{$keyword}%")
            ->orWhere(\DB::raw('concat(lastname," ",firstname)'), 'LIKE', "%{$keyword}%");
        })
        ->where('role','!=','Super Administrator')
        ->get();

        return IndividualResource::collection($data);
    }
    
}