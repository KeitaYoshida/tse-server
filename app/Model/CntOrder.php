<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class CntOrder extends Model
{
  protected $table = 'cnt_orders';
  protected $primaryKey = 'cnt_order_id';
  protected $guarded = array();

  public function live()
  {
    return $this->hasOne('App\Model\CntOrderList', 'cnt_order_code', 'cnt_order_code');
  }

  public function price()
  {
    return $this->hasMany('App\Model\CntOrderPrice', 'cnt_order_id', 'cnt_order_id');
  }
  public function cmpt()
  {
    return $this->hasOne('App\Model\Components', 'cmpt_id', 'cmpt_id');
  }
  public function listdata()
  {
    return $this->belongsTo('App\Model\CntOrderList', 'cnt_order_code', 'cnt_order_code');
  }
  public function item()
  {
    return $this->hasOne('App\Model\Item', 'item_id', 'item_id');
  }
}
