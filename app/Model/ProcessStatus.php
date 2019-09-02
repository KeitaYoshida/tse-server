<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ProcessStatus extends Model
{
  protected $table = 'process_status';
  protected $primaryKey = 'process_status';
  protected $guarded = array();
  public $timestamps = false;
}
