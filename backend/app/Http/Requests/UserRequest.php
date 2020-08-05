<?php

namespace App\Http\Requests;

use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use App\User;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if ($this->isMethod('post')) {
            return [
                'username' => 'required|string',                
                'email' => 'required|email|unique:Users,email',
                'password' => 'required',
                'photo' => 'string',
                'nicks' => 'string'
            ];
        }
        if ($this->isMethod('put')) {
            return [
                'username' => 'string',                
                'email' => 'email|unique:Users,email',
                'password' => 'nullable',
                'photo' => 'string',
                'nicks' => 'string'
            ];
        }      
    }
}
