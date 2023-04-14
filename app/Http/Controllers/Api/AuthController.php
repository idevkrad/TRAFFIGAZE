<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\UserResource;

class AuthController extends Controller
{
    /**
     * Create User
     * @param Request $request
     * @return User 
     */
    public function createUser(Request $request)
    {
        try {
            //Validated
            $validateUser = Validator::make($request->all(), 
            [
                'name' => 'required',
                'mobile' => 'required|unique:users,mobile',
                'email' => 'required|email|unique:users,email',
                'password' => 'required',
                'avatar' => 'nullable|image64:jpeg,jpg,png',
                'confirm_password' => 'same:password',
            ]);

            if($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            if($request->avatar){
                $dd = $request->avatar;
                $img = explode(',', $dd);
                $ini =substr($img[0], 11);
                $type = explode(';', $ini);
                if($type[0] == 'png'){
                    $image = str_replace('data:image/png;base64,', '', $dd);
                }else{
                    $image = str_replace('data:image/jpeg;base64,', '', $dd);
                }
                $image = str_replace(' ', '+', $image);
                $imageName =  date('Y').'-'.date('mhis').'.'.$type[0];
                
                if(\File::put(public_path('images/avatars'). '/' . $imageName, base64_decode($image))){
                    //
                }
            }

            $user = User::create([
                'email' => $request->email,
                'name' => $request->name,
                'avatar' => $imageName,
                'mobile' => $request->mobile,
                'password' => Hash::make($request->password)
            ]);

            return response()->json([
                'status' => true,
                'message' => 'User Created Successfully',
                'token' => $user->createToken("API TOKEN")->plainTextToken
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Login The User
     * @param Request $request
     * @return User
     */
    public function loginUser(Request $request)
    {
        try {
            $validateUser = Validator::make($request->all(), 
            [
                'email' => 'required|email',
                'password' => 'required'
            ]);

            if($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            if(!Auth::attempt($request->only(['email', 'password']))){
                return response()->json([
                    'status' => false,
                    'message' => 'Email & Password does not match with our record.',
                ], 401);
            }

            $user = User::where('email', $request->email)->first();

            return response()->json([
                'status' => true,
                'message' => 'User Logged In Successfully',
                'is_admin' => $user->is_admin,
                'token' => $user->createToken("API TOKEN")->plainTextToken
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function logoutUser(Request $request){
        return response()->json(['status' => 200]);
    }

    public function index(){
        $data = User::where('is_admin',0)->paginate(10);

        return response()->json([
            'status' => true,
            'message' => 'List fetched',
            'data' => UserResource::collection($data)
        ], 200);
    }

    public function update(Request $request){
        try {
            //Validated
            $validateUser = Validator::make($request->all(), 
            [
                'id' => 'required',
                'avatar' => 'required|image64:jpeg,jpg,png'
            ]);

            if($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            $data = User::where('id',$request->id)->first();

            if($request->avatar){
                $dd = $request->avatar;
                $img = explode(',', $dd);
                $ini =substr($img[0], 11);
                $type = explode(';', $ini);
                if($type[0] == 'png'){
                    $image = str_replace('data:image/png;base64,', '', $dd);
                }else{
                    $image = str_replace('data:image/jpeg;base64,', '', $dd);
                }
                $image = str_replace(' ', '+', $image);
                $imageName =  $data->id.'.'.$type[0];
                
                if(\File::put(public_path('images/avatars'). '/' . $imageName, base64_decode($image))){
                    $data->avatar = $imageName;
                    $data->save();
                }
            }

            $data = User::where('id',$request->id)->first();
            
            return response()->json([
                'status' => true,
                'message' => 'User Updated Successfully',
                'data' => new UserResource($data)
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function password(Request $request){

        $validatedData = $request->validate([
            'password' => 'required|string|min:9|confirmed',
            'password_confirmation' => 'same:password',
        ]);

        User::find($request->id)->update(['password'=> Hash::make($request->input('password'))]);
        
        return response()->json([
            'status' => true,
            'message' => 'Password Updated Successfully',
            'data' => []
        ], 200);
        
    }
}
