<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Monthly extends Model
{
  protected $table = 'monthly';
  protected $primaryKey = 'monthly_id';
  protected $guarded = array();
}
