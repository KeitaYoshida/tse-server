<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Daily extends Model
{
  protected $table = 'daily';
  protected $primaryKey = 'day_id';
  protected $guarded = array();
}
