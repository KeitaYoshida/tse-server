<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class UserShonin extends Model
{
  protected $table = 'user_shonin';
  protected $primaryKey = 'user_shonin_id';
  protected $guarded = array();
  public $timestamps = false;

  public function userdata()
  {
    return $this->belongsTo('App\Model\User', 'children_id', 'id');
  }
}
