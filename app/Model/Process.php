<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Process extends Model
{
  protected $table = 'process';
  protected $primaryKey = 'process_id';
  protected $guarded = array();
  public $timestamps = false;
}
