<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class InvItem extends Model
{
  protected $table = 'inv_items';
  protected $primaryKey = 'inv_item_id';
  protected $guarded = array();

  public function item_info()
  {
    return $this->hasOne('App\Model\Item', 'item_id', 'item_id');
  }
}
