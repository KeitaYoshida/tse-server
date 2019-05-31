<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Checkdata;

class CheckdataController extends Controller
{
  public function store(Request $request)
  {
    $checkdata = new Checkdata;
    $data = $request->all();
    $dup = $checkdata
      ->where('workday', $data[0]['workday'])
      ->where('workcode', $data[0]['workcode'])
      ->where('code', $data[0]['code'])
      ->get();
    $res = '';

    if (count($dup) === 0) {
      $checkdata->insert($data);
      $res = 'in';
    } else {
      foreach ($data as $row) {
        $checkdata
          ->where('workday', $row['workday'])
          ->where('workcode', $row['workcode'])
          ->where('code', $row['code'])
          ->update(['val' => $row['val']]);
      }
    }
    return $res;
  }

  public function upid(Request $request)
  {
    $d = new Checkdata;
    return $d
      ->where('workday', $request['workday'])
      ->where('workcode', $request['workcode'])
      ->where('code', $request['code'])
      ->get(['checkdata_id']);
  }

  public function daylist($date)
  {
    $d = new Checkdata;
    return $d
      ->where('workday', $date)
      ->get();
  }
}
