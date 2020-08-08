<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use App\Http\Requests\UserRequest;
use App\Post;

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
    public function posts()
    {
        return $this->hasMany('App\Post');
    }

    public function following()
    {
        return $this->belongsToMany('App\User', 'follow_user', 'following_id', 'follower_id');
    }
    public function followers()
    {
        return $this->belongsToMany('App\User', 'follow_user', 'follower_id', 'following_id');
    }

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
        return $user;
    }

    public function listUsers()
    {
        return $this->all();
    }

    public function deleteUser($id)
    {
        $user = User::findOrFail($id);
        User::destroy($id);
        return ('Usuário ' . $id . ' deletado!');
    }

    public function follow($following_id, $follower_id)
    {
        if ($following_id <> $follower_id) {
            $following = User::findOrFail($following_id);
            $count = $following->following()->count();
            $following->following()->sync($follower_id, false);
            $count_after = $following->following()->count();

            if ($count == $count_after) {
                return ('Você já segue o: ' . $follower_id . ' !');
            } else {
                return ('Você seguiu o: ' . $follower_id . ' !');
            }
        } else {
            return ('Você não pode seguir a si mesmo!');
        }
    }
    public function unfollow($following_id, $follower_id)
    {
        if ($following_id <> $follower_id) {
            $following = User::findOrFail($following_id);
            $count = $following->following()->count();
            $following->following()->detach($follower_id);
            $count_after = $following->following()->count();

            if ($count > $count_after) {
                return ('Você não segue o: ' . $follower_id . ' !');
            } else {
                return ('Você já não segue mais o: ' . $follower_id . ' !');
            }
        } else {
            return ('Você não pode não seguir a si mesmo!');
        }
    }
}
