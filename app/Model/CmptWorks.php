<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class CmptWorks extends Model
{
  protected $table = 'cmpt_works';
  protected $primaryKey = 'work_id';
  protected $guarded = array();
  public $timestamps = false;

  // public function cmpt()
  // {
  //   return $this->belongsToMany('App\Model\Components', 'r_model_cmpt', 'model_id', 'cmpt_id');
  // }
}
