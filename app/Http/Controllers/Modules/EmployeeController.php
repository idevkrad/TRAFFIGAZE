<?php

namespace App\Http\Controllers\Modules;

use App\Models\User;
use App\Models\UserProfile;
use App\Models\UserEmployee;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Employee\Lists;
use App\Http\Requests\UserRequest;
use App\Http\Resources\EmployeeResource;

class EmployeeController extends Controller
{
    public function index(Request $request, Lists $lists){
        if($request->type == 'lists'){
            return $lists->get($request); 
        }else if($request->type == 'individual'){
            return $lists->individual($request); 
        }else if($request->type == 'staff'){
            return $lists->staff($request);
        }else{
            return inertia('Modules/Employee/Index');
        }
    }

    public function store(UserRequest $request)
    { 
        $data = \DB::transaction(function () use ($request){
            return $data = User::new($request->all());
        });

        return back()->with([
            'message' => 'User created successfully. Thanks',
            'data' => new EmployeeResource($data),
            'type' => 'bxs-check-circle'
        ]); 
    }

    public function update(UserRequest $request)
    {   
        $data = \DB::transaction(function () use ($request){
            if($request->editable === 'verify'){
                if(EmailNewAccount::dispatch($request->id)->delay(now()->addSeconds(10))){
                    return [
                        'data' => '',
                        'message' => 'User verification successfully send. Thanks',
                        'type' => 'bx-mail-send'
                    ];
                }
            }else{
                $data = User::findOrFail($request->id);
                $data->update($request->except('img','editable'));
                $employee = UserEmployee::where('user_id',$request->id)->first();
                $employee->update($request->except('email','firstname','lastname','middlename','suffix','gender','mobile','role','birthday','is_active','img','editable'));
                $profile = UserProfile::where('user_id',$request->id)->first();
                $profile->update($request->except('email','role','is_active','img','editable'));
                ($request->img != '') ? $data = $data->image($request->all()) : '';
                $data = UserEmployee::where('user_id',$request->id)->first();
                return [
                    'data' => $data,
                    'message' => 'Employee updated successfully. Thanks',
                    'type' => 'bxs-check-circle'
                ];
            }
        });
        
        if($request->editable){
            return back()->with([
                'message' => $data['message'],
                'data' => ($data['data'] != '') ? new EmployeeResource($data['data']) : '',
                'type' => $data['type']
            ]);
        }else{
            return new EmployeeResource($data['data']);
        }
    }

    public function show($type){
        return inertia('Employees/Import');
    }

    public function edit($type,Request $request){
        if($type == 'roles'){
            $data = $this->roles($request);
        }else{
            $data = $this->groups($request);
        }
        
        return back()->with([
            'data' => new EmployeeResource($data),
            'message' => 'Employee updated successfully. Thanks',
            'type' => 'bxs-check-circle'
        ]);
    }

    public function roles($request)
    {       
        $roles =$request->roles;
        $data = User::findOrFail($request->id);
        $data->roles()->sync($roles);
        return $data = UserEmployee::with('department','status','office','position','religion','level','bloodtype','position')
        ->with('user:id,avatar,email,username,role,is_active','user.profile:id,user_id,firstname,lastname,middlename,mobile,gender,birthday')->where('user_id',$request->id)->first();
    }

    public function groups($request)
    {     
        $groups =$request->groups;
        $data = User::findOrFail($request->id);
        $data->groups()->sync($groups);
        return $data = UserEmployee::with('department','status','office','position','religion','level','bloodtype','position')
        ->with('user:id,avatar,email,username,role,is_active','user.profile:id,user_id,firstname,lastname,middlename,mobile,gender,birthday')->where('user_id',$request->id)->first();
    }
}
