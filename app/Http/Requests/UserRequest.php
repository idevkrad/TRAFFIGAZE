<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'email' => 'sometimes|required|email|max:150|unique:users,email,'.$this->id,
            'role' => 'sometimes|required|string',
            'firstname' => 'sometimes|required|string|max:100',
            'lastname' => 'sometimes|required|string|max:100',
            'middlename' => 'sometimes|required|string|max:20',
            'gender' => 'sometimes|required',
            'birthday' => 'sometimes|required',
            'is_active' => 'sometimes|required',
            'mobile' => 'sometimes|required|numeric|unique:user_profiles,mobile,'.$this->profile_id,
            'img' => 'nullable|image64:jpeg,jpg,png',
            'position_id' => 'sometimes|required',
            'department_id' => 'sometimes|required',
            'status_id' => 'sometimes|required',
        ];
    }
}
