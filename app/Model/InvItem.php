<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class InvItem extends Model
{
  protected $table = 'inv_items';
  protected $primaryKey = 'inv_item_id';
  protected $guarded = array();
}
