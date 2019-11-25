<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class InvWorklistItem extends Model
{
  protected $table = 'inv_worklist_items';
  protected $primaryKey = 'inv_worklist_item_id';
  protected $guarded = array();
  public $timestamps = false;

  public function cmpt()
  {
    return $this->hasOne('App\Model\Components', 'cmpt_id', 'cmpt_id');
  }
}
