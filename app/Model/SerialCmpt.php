<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SerialCmpt extends Model
{
  protected $table = 'serial_cmpt';
  protected $primaryKey = 'serial_id';
  protected $guarded = array();
  public $timestamps = false;
}
