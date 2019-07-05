<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class RCmptItem extends Model
{
  protected $table = 'r_cmpt_item';
  protected $primaryKey = 'r_ci_id';
  protected $guarded = array();
  public $timestamps = false;

  public function items()
  {
    return $this->hasOne("App\Model\Item", "item_id", "item_id");
  }
}
