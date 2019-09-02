<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Models extends Model
{
  protected $table = 'models';
  protected $primaryKey = 'model_id';
  protected $guarded = array();
  public $timestamps = false;

  public function cmpt()
  {
    return $this->belongsToMany('App\Model\Components', 'r_model_cmpt', 'model_id', 'cmpt_id')->withPivot(['row', 'process_row']);
  }
}
