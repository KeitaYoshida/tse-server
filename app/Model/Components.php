<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Components extends Model
{
  protected $table = 'components';
  protected $primaryKey = 'cmpt_id';
  protected $guarded = array();
  public $timestamps = false;

  public function item()
  {
    return $this->belongsToMany("App\Model\Item", "r_cmpt_item", "cmpt_id", "item_id");
  }
  public function item_use()
  {
    return $this->hasMany("App\Model\RCmptItem", "cmpt_id", "cmpt_id");
  }
  public function works()
  {
    return $this->hasMany('App\Model\CmptWorks', 'cmpt_id', 'cmpt_id');
  }
  // public function imte_use_od()
  // {
  //   return $this->hasMany("App\Model\RCmptItem", "cmpt_id", "cmpt_id");
  // }
}
