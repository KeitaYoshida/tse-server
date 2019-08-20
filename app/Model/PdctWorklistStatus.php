<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PdctWorklistStatus extends Model
{
  protected $table = 'pdct_worklist_status';
  protected $primaryKey = 'worklist_status';
  protected $guarded = array();
  public $timestamps = false;
}
