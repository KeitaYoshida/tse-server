<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ItemCountHistory extends Model
{
  protected $table = 'item_count_history';
  protected $primaryKey = ['item_code', 'item_rev', 'add_time'];
  protected $guarded = array();
  public $incrementing = false;
  public $timestamps = false;
}
