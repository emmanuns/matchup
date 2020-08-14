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

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(
            $validator->errors(),
            422
        ));
    }

    public function rules()
    {
        if ($this->isMethod('post')) {
            return [
                'username' => 'required|string|unique:users,username',
                'email' => 'required|email|unique:users,email',
                'password' => 'min:6|max:12|required',
                'photo' => 'string|nullable',
                'nicks' => 'string|nullable',
                'gender' => 'required|string',
                'admin' => 'boolean|nullable',
            ];
        }

        if ($this->isMethod('put')) {
            return [
                'username' => 'string|unique:users,username',
                'email' => 'email|unique:users,email',
                'password' => 'min:6|max:12',
                'photo' => 'string',
                'nicks' => 'string',
                'gender' => 'string',
                'admin' => 'boolean',
            ];
        }
    }

    public function messages()
    {
        return [
            'username.unique' => 'Esse usuário já existe!',
            'username.required' => 'O seu nome de usuário é necessário!',
            'username.string' => 'Precisa ser string!',
            'email.required' => 'O seu email é necessário!',
            'email.email' => 'Formato de email inválido!',
            'email.unique' => 'Esse email já existe!',
            'password.required' => 'Digite sua senha!',
            'password.min' => 'Sua senha precisa de no mínimo 6 caracteres!',
            'password.man' => 'Sua senha deve conter no mínimo 12 caracteres!',
            'photo.string' => 'Photo precisa ser string!',
            'nicks.string' => 'Nicks precisa ser string!',
            'gender.string' => 'Gênero precisa ser string!',
            'gender.required' => 'Informe seu gênero!'
        ];
    }
}
