<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class InvList extends Model
{
  protected $table = 'inv_list';
  protected $primaryKey = 'inv_id';
  protected $guarded = array();
}
