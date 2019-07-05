<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class CsvSetting extends Model
{
  protected $table = 'csv_setting';
  protected $primaryKey = 'csv_id';
  protected $guarded = array();
  public $timestamps = false;
}
