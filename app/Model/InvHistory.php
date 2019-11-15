<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class InvHistory extends Model
{
  protected $table = 'inv_history';
  protected $primaryKey = 'inv_his_id';
  protected $guarded = array();
}
