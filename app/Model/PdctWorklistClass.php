<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PdctWorklistClass extends Model
{
  protected $table = 'pdct_worklist_class';
  protected $primaryKey = 'worklist_class';
  protected $guarded = array();
  public $timestamps = false;
}
