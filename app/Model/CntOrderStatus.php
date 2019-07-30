<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class CntOrderStatus extends Model
{
  protected $table = 'cnt_order_status';
  protected $primaryKey = 'cnt_order_status';
  protected $guarded = array();
  public $timestamps = false;
}
