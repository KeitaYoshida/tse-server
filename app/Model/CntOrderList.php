<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class CntOrderList extends Model
{
  protected $table = 'cnt_order_lists';
  protected $primaryKey = 'cnt_orderlist_id';
  protected $guarded = array();
  public $timestamps = false;

  public function status()
  {
    return $this->hasOne('App\Model\CntOrderListStatus', 'cnt_order_list_status', 'cnt_order_list_status');
  }
  public function order_status()
  {
    return $this->hasOne('App\Model\CntOrderStatus', 'cnt_order_status', 'cnt_status');
  }
}
