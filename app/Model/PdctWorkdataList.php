<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PdctWorkdataList extends Model
{
  protected $table = 'pdct_workdata_list';
  protected $primaryKey = 'worklist_id';
  protected $guarded = array();
  public $timestamps = false;

  // function production()
  // {
  //   $this->belongsTo('App\Model\Production', 'pdct_id', 'pdct_id');
  // }
  public function model()
  {
    return $this->hasOne('App\Model\Models', 'model_id', 'model_id');
  }

  public function class()
  {
    return $this->hasOne('App\Model\PdctWorklistClass', 'worklist_class', 'worklist_class');
  }

  public function status()
  {
    return $this->hasOne('App\Model\PdctWorklistStatus', 'worklist_status', 'worklist_status');
  }

  public function serials()
  {
    return $this->hasMany('App\Model\Serials', 'worklist_id', 'worklist_id')->orderBy('serial_id');
  }
}
