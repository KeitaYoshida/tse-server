<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PdctUseItem extends Model
{
  protected $table = 'pdct_workdata_useitem';
  protected $primaryKey = 'pdct_useitem_id';
  protected $guarded = array();

  public function items()
  {
    return $this->hasOne('App\Model\Item', 'item_id', 'item_id');
  }
  public function workdata()
  {
    return $this->hasOne('App\Model\PdctWorkdataList', 'worklist_id', 'worklist_id');
  }
  public function cmpt()
  {
    return $this->hasOne('App\Model\Components', 'cmpt_id', 'cmpt_id');
  }
}
