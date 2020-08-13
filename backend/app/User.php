<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use App\Http\Requests\UserRequest;

class User extends Authenticatable
{
    use Notifiable;
    use HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    
    public function createUser(UserRequest $request)
    {
        $this->username = $request->username;        
        $this->email = $request->email;
        $this->password = bcrypt($request->password);
        $this->photo = $request->photo;
        $this->nicks = $request->nicks;
        $this->gender = $request->gender;        
        $this->admin = false;
        $this->save();
    }

    public function updateUser(UserRequest $request, $id)
    {
        $user = User::findOrFail($id);
        
        if($user == null) {
            return response()->json('Usuário não encontrado.', 404);
        }

        if ($request->username) {
            $this->username = $request->username;
        }
        if ($request->email) {
            $this->email = $request->email;
        }
        if ($request->password) {
            $this->password = bcrypt($request->password);
        }
        if ($request->photo) {
            $this->photo = $request->photo;
        }  
        if ($request->nicks) {
            $this->nicks = $request->nicks;
        }
        if ($request->gender) {
            $this->gender = $request->gender;
        }

        $this->admin = false;
        
        $this->save();
    }

    public function showUser($id)
    {
        
        $user = User::findOrFail($id);
        if($user == null) {
            return response()->json('Usuário não encontrado.', 404);
        }
        
        return $user;
    }

    public function listUsers()
    {
        return $this->all();
    }

    public function deleteUser($id)
    {
        $user = User::findOrFail($id);
        if($user == null) {
            return response()->json('Usuário não encontrado', 404);
        }
        User::destroy($id);
        return response()->json("Usuário " . $id . " deletado", 202);
    }

}
