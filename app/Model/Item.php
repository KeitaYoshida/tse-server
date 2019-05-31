<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
  protected $table = 'items';
  protected $primaryKey = ['item_code', 'item_rev'];
  protected $guarded = array();
  public $incrementing = false;
  public $timestamps = false;

  function vendor()
  {
    return $this->hasMany('App\Model\MVendorItem', 'item_code', 'item_code');
    // return $this->hasManyThrough('App\Model\Vendor', 'App\Model\MVendorItem', 'item_code', 'vendor_code');
  }
}
