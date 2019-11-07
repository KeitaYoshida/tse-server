<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class itemLastHistory extends Model
{
  protected $table = 'item_last_history';
  protected $primaryKey = 'item_history_id';
  protected $guarded = array();

  public function items()
  {
    return $this->hasOne('App\Model\Items', 'item_id', 'item_id');
  }
  public function users()
  {
    return $this->hasOne('App\Model\User', 'loginid', 'loginid');
  }
}
