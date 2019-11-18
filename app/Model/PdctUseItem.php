<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PdctUseItem extends Model
{
  protected $table = 'pdct_workdata_useitem';
  protected $primaryKey = 'pdct_useitem_id';
  protected $guarded = array();
}
