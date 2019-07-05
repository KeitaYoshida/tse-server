<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
  protected $table = 'items';
  protected $primaryKey = 'item_id';
  protected $guarded = array();
  public $timestamps = false;

  function vendor()
  {
    return $this->hasMany('App\Model\MVendorItem', 'item_id', 'item_id');
  }
}
