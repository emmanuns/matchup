<?php

namespace App\Http\Requests;

use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use App\Post;

class PostRequest extends FormRequest
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
                'text' => 'required|string|max:512'
            ];
        }

        if ($this->isMethod('put')) {
            return [
                'text' => 'string|max:512',
            ];
        }
    }
    public function messages()
    {
        return [
            'text.required' => 'Você precisa digitar um texto!',
            'text.string' => 'Precisa ser string!',
            'text.max' => 'No máximo 512 caracteres!'
        ];
    }
  
}
