<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
  protected $table = 'vendors';
  protected $primaryKey = 'vendoer_code';
  protected $guarded = array();
  public $incrementing = false;
}
