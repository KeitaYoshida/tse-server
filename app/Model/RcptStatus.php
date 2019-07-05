<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class RcptStatus extends Model
{
  protected $table = 'rcpt_status';
  protected $primaryKey = 'rcpt_status_id';
  protected $guarded = array();
  public $timestamps = false;
}
