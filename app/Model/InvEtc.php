<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class InvEtc extends Model
{
  protected $table = 'inv_etc';
  protected $primaryKey = 'inv_etc_id';
  protected $guarded = array();

  public function info()
  {
    return $this->hasOne('App\Model\Item', 'inv_id', 'inv_id');
  }
}
