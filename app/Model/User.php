<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
  protected $table = 'users';
  protected $primaryKey = 'id';
  protected $guarded = array();
  public $timestamps = false;

  public function shonin()
  {
    return $this->hasMany('App\Model\UserShonin', 'user_id', 'id');
  }
}
