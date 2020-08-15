<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\CommentPost;

class CommentPostRequest extends FormRequest
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
                'text' => 'required|string|max:512',
                'post_id' => 'required|integer'
            ];
        }

        if ($this->isMethod('put')) {
            return [
                'text' => 'string|max:512',
                'post_id' => 'required|integer'
            ];
        }
    }
    public function messages()
    {
        return [
            'text.required' => 'Você precisa digitar um texto!',
            'text.string' => 'Precisa ser string!',
            'text.max' => 'No máximo 512 caracteres!',
            'post_id.required' => 'Você precisa inserir o id do post!',
            'post_id.integer' => 'O id do post precisa ser um número inteiro',
        ];
    }
}
