<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
  protected $table = 'items';
  protected $primaryKey = 'item_id';
  protected $guarded = array();
  // public $timestamps = false;

  // protected $with = ['item_class_val'];

  function vendor()
  {
    return $this->hasMany('App\Model\MVendorItem', 'item_id', 'item_id');
  }
  function item_class_val()
  {
    return $this->hasOne('App\Model\ItemClass', 'item_class_id', 'item_class');
  }
}
