<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PdctWorkdataList extends Model
{
  protected $table = 'pdct_workdata_list';
  protected $primaryKey = 'worklist_id';
  protected $guarded = array();
  public $timestamps = false;

  function production()
  {
    $this->belongsTo('App\Model\Production', 'pdct_id', 'pdct_id');
  }
  function model()
  {
    $this->hasOne('App\Model\Models', 'model_id', 'model_id');
  }
  function class()
  {
    $this->hasOne('App\Model\PdctWorklistClass', 'worklist_class', 'worklist_class');
  }
  function status()
  {
    $this->hasOne('App\Model\Models\PdctWorklistStatus', 'worklist_status', 'worklist_status');
  }
}
