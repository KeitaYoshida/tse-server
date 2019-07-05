<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PdctStatus extends Model
{
  protected $table = 'pdct_status';
  protected $primaryKey = 'pdct_status';
  protected $guarded = array();
  public $timestamps = false;
}
