<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ItemClass extends Model
{
  protected $table = 'item_class';
  protected $primaryKey = 'item_class_id';
  protected $guarded = array();
  public $timestamps = false;
}
