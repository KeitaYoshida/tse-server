<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class RModelCmpt extends Model
{
  protected $table = 'r_model_cmpt';
  protected $primaryKey = 'r_mc_id';
  protected $guarded = array();
  public $timestamps = false;
}
