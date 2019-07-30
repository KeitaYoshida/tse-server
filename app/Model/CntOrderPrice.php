<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class CntOrderPrice extends Model
{
  protected $table = 'cnt_order_price';
  protected $primaryKey = 'cnt_order_price_id';
  protected $guarded = array();
  public $timestamps = false;

  public function vname()
  {
    return $this->hasOne('App\Model\Vendor', 'vendor_code', 'vendor_code');
  }
}
