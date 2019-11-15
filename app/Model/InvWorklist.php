<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class InvWorklist extends Model
{
  protected $table = 'inv_worklist';
  protected $primaryKey = 'inv_worklist_id';
  protected $guarded = array();
}
