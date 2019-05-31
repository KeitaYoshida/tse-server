<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class CntOrderList extends Model
{
  protected $table = 'cnt_order_lists';
  protected $primaryKey = 'cnt_orderlist_id';
  protected $guarded = array();
  public $incrementing = false;
  public $timestamps = false;
}
