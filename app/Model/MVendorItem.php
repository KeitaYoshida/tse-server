<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class MVendorItem extends Model
{
  protected $table = 'm_vendor_price';
  protected $primaryKey = ['item_id', 'vendor_code'];
  protected $guarded = array();
  public $incrementing = false;
  function vendname()
  {
    return $this->hasOne('App\Model\Vendor', 'vendor_code', 'vendor_code');
  }
}
