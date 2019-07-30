<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class CntOrderListStatus extends Model
{
  protected $table = 'cnt_order_list_status';
  protected $primaryKey = 'cnt_order_list_status';
  protected $guarded = array();
  public $timestamps = false;
}
