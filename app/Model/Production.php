<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Production extends Model
{
  protected $table = 'productions';
  protected $primaryKey = 'pdct_id';
  protected $guarded = array();
  public $timestamps = false;

  public function child()
  {
    return $this->hasMany('App\Model\Reception', 'pdct_id', 'pdct_id');
  }
  public function status()
  {
    return $this->hasOne('App\Model\PdctStatus', 'pdct_status', 'pdct_status');
  }
}
