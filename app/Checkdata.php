<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Checkdata extends Model
{
  protected $primaryKey = "checkdata_id";
  protected $table = 't_checkdata_daily';
  protected $guarded = array('checkdata_id', 'created_at');

  public function error()
  {
    return $this->hasMany('App\ErrorDataDaily', 'checkdata_id', 'checkdata_id');
  }
}
