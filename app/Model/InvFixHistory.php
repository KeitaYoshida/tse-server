<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class InvFixHistory extends Model
{
  protected $table = 'inv_fix_history';
  protected $primaryKey = 'inf_fix_his_id';
  protected $guarded = array();

  public function inv_item()
  {
    return $this->hasOne('App\Model\InvItem', 'inv_item_id', 'inv_item_id');
  }
  public function user()
  {
    return $this->hasOne('App\Model\User', 'loginid', 'loginid');
  }
}
