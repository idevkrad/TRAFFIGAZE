<?php

namespace App\Http\Traits;

use App\Models\User;

trait ImageUploadTrait {
    
    public function storeImage($request,$id = null){
        ($id == null) ? $id = $request['id'] : $id;
        if($request['img'] != ''){
            ($request['lastname'] != '') ? $name = strtolower($request['lastname']).'-'.$id : $name = $id;
            $data = $request['img'];
            $img = explode(',', $data);
            $ini =substr($img[0], 11);
            $type = explode(';', $ini);
            if($type[0] == 'png'){
                $image = str_replace('data:image/png;base64,', '', $data);
            }else{
                $image = str_replace('data:image/jpeg;base64,', '', $data);
            }
            $image = str_replace(' ', '+', $image);
            $imageName = $name.'.'.$type[0];
            
            if(\File::put(public_path('images/avatars'). '/' . $imageName, base64_decode($image))){
                $data = User::findOrFail($id);
                $data->avatar = $imageName;
                $data->save();
                
                return $data;
            }
        }
    }
}