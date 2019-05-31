<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ErrorDataDaily extends Model
{
  protected $primaryKey = "error_id";
  protected $table = 't_errordata_daily';
  protected $guarded = array();
  public function checkdata()
  {
    return $this->belongsTo('App\Checkdata');
  }
}
