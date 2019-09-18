<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Daily;
use App\Model\Monthly;

class monitor extends Controller
{
  public function InitDay()
  {
    $day = new Daily;
    $data = $day->orderBy('created_at', 'asc')->take(31)->get();
    return $data;
  }

  public function InitMonth()
  {
    $month = new Monthly;
    $data = $month->orderBy('created_at', 'desc')->take(12)->get();
    return $data;
  }
}
