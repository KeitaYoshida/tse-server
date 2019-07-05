<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Reception extends Model
{
  protected $table = 'receptions';
  protected $primaryKey = 'recept_id';
  protected $guarded = array();
  public $timestamps = false;

  public function status()
  {
    return $this->hasOne('App\Model\RcptStatus', 'rcpt_status_id', 'rcpt_status');
  }
  public function product()
  {
    return $this->hasOne('App\Model\Production', 'pdct_id', 'pdct_id');
  }
}
