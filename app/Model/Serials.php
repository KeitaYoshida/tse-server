<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Serials extends Model
{
  protected $table = 'serials';
  protected $primaryKey = 'serial_id';
  protected $guarded = array();
  public $timestamps = false;

  public function cmpt_sn()
  {
    return $this->hasMany('App\Model\SerialCmpt', 'serial_id', 'serial_id')->orderBy('serial_id');
  }

  public function process()
  {
    return $this->hasMany('App\Model\Process', 'serial_id', 'serial_id')->orderBy('serial_id');
  }
}
