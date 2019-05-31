<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ConstOrderTbl extends Model
{
  protected $primaryKey = "id";
  protected $table = 'constOrderDataTbl';
  protected $guarded = array();
}
