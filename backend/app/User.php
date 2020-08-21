<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use App\Http\Requests\UserRequest;
use App\Post;
use App\Notifications\Register;
use App\Notifications\Welcome;
use Auth;
use Carbon\Carbon;

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


    //
    //Relations
    //

    public function posts()
    {
        return $this->hasMany('App\Post');
    }

    public function liking()
    {
        return $this->belongsToMany('App\Post', 'like_post_user');
    }

    public function following()
    {
        return $this->belongsToMany('App\User', 'follow_user', 'following_id', 'follower_id');
    }

    public function followers()
    {
        return $this->belongsToMany('App\User', 'follow_user', 'follower_id', 'following_id');
    }

    public function commenting()
    {
        return $this->hasMany('App\Post', 'comment_posts');
    }

    public function tags()
    {
        return $this->belongsToMany('App\Tag');
    }

    //
    //Operations
    //

    public function createUser(UserRequest $request)
    {
        $this->username = $request->username;
        $this->email = $request->email;
        $this->password = bcrypt($request->password);
        $this->image = $request->image;
        $this->nicks = $request->nicks;
        $this->gender = $request->gender;
        $this->admin = false;
        $this->save();
        //$this->notify(new Welcome($this));
        //$this->notify(new Register($this));
    }

    public function confirmAccount()
    {
        $this->email_verified_at = Carbon::now();
        $this->save();
    }

    public function updateUser(UserRequest $request, $id)
    {
        if ($request->username) {
            $this->username = $request->username;
        }
        if ($request->email) {
            $this->email = $request->email;
        }
        if ($request->password) {
            $this->password = bcrypt($request->password);
        }
        if ($request->image) {
            $this->image = $request->image;
        }
        if ($request->nicks) {
            $this->nicks = $request->nicks;
        }
        if ($request->gender) {
            $this->gender = $request->gender;
        }
        
        $this->save();     
    }

    public static function showUser($id)
    {
        $user = User::findOrFail($id);
        return $user;
    }

    public static function listUsers()
    {
        return User::all();
    }

    public static function deleteUser($id)
    {
        $user = User::findOrFail($id);
        if($user == null)
            return response()->json('Usuário não encontrado.',404);
        User::destroy($id);
        return ('Usuário ' . $id . ' deletado!');
    }

    public function follow($following_id, $follower_id)
    {
        $follower_user = User::findOrFail($follower_id);
        $following_user = User::findOrFail($following_id);

        if($following_user->followers->contains($follower_user)) {
            $following_user->followers()->detach($follower_id);
            return ('Você deixou de seguir o usuário de ID ' . $following_id . ' !');
        }
        else {
            $following_user->followers()->syncWithoutDetaching($follower_id);
            return ('Você seguiu o usuário de ID ' . $following_id . ' !');
        }
    }

    public static function like($post_id)
    {
        $user = Auth::user();
        $user_id = $user->id;
        $post = Post::findOrFail($post_id);
        $user = User::findOrFail($user_id);
        if($post->userLikes->contains($user)) {
            $user->liking()->detach($post_id);
            return ('Você descurtiu o post ' . $post_id . ' !');
        }
        else {
            $user->liking()->syncWithoutDetaching($post_id);
            return ('Você curtiu o post ' . $post_id . ' !');
        }
    }
}
