<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserProfile;
use App\Models\UserEmployee;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use App\Jobs\EmailNewAccount;

class UserController extends Controller
{
    public function index(Request $request)
    {   
        $data = UserResource::collection(
            User::query()
            ->with('roles','groups')
            ->with('profile')->with('employee.position','employee.status','employee.department','employee.religion','employee.level','employee.bloodtype')
            ->when($request->keyword, function ($query, $keyword) {
                $query->whereHas('profile',function ($query) use ($keyword) {
                    $query->where(\DB::raw('concat(firstname," ",lastname)'), 'LIKE', "%{$keyword}%")
                    ->orWhere(\DB::raw('concat(lastname," ",firstname)'), 'LIKE', "%{$keyword}%");
                })->orWhere(function ($query) use ($keyword) {
                    $query->where('email', 'LIKE', "%{$keyword}%")->whereNotIn('role',['Super Administrator']);
                });
            })
            ->whereHas('profile',function ($query){
                $query->orderBy('lastname','DESC');
            })
            ->whereNotIn('role',['Super Administrator'])
            ->paginate($request->count)
            ->withQueryString()
        );

        if($request->search){
            return $data;
        }else{
            return inertia('Modules/Users/Index');
        }
    }

    public function store(UserRequest $request)
    { 
        $data = \DB::transaction(function () use ($request){
            return $data = User::new($request->all());
        });

        return back()->with([
            'message' => 'User created successfully. Thanks',
            'data' => new UserResource($data),
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
                $data = User::findOrFail($request->id);
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
                'data' => ($data['data'] != '') ? new UserResource($data['data']) : '',
                'type' => $data['type']
            ]);
        }else{
            return new UserResource($data['data']);
        }
    }

    public function show($type){
        return inertia('Employees/Import');
    }

    public function edit($type,Request $request){
        if($type == 'roles'){
            $this->roles($request);
        }else{
            $this->groups($request);
        }
    }

    public function roles($request)
    {       
        $roles =$request->roles;
        $data = User::findOrFail($request->id);
        $data->roles()->sync($roles);
    }

    public function groups($request)
    {     
        $groups =$request->groups;
        $data = User::findOrFail($request->id);
        $data->groups()->sync($groups);
    }

}
