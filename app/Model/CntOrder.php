<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class CntOrder extends Model
{
  protected $table = 'cnt_orders';
  protected $primaryKey = 'cnt_order_id';
  protected $guarded = array();
  public $incrementing = false;
  public $timestamps = false;

  public function live()
  {
    return $this->hasOne('App\Model\CntOrderList', 'cnt_order_code', 'cnt_order_code');
  }
}
