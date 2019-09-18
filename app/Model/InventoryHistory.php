<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class InventoryHistory extends Model
{
  protected $table = 'inventory_history';
  protected $primaryKey = 'his_id';
  protected $guarded = array();

  function items()
  {
    $this->hasOne('App\Model\Item', 'item_id', 'item_id');
  }
  function users()
  {
    $this->hasOne('App\Model\User', 'loginid', 'loginid');
  }
}
