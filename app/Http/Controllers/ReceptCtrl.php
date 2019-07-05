<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Reception;
use App\Model\CsvSetting;

class ReceptCtrl extends Controller
{
  public function DataList(Request $req)
  {
    $rc = new Reception;
    return $rc->whereIn('order_code', $req)->with('status')->with('product')->get();
  }

  public function CheckType($type)
  {
    $cs = new CsvSetting;
    return $cs->where('csv_type', $type)->get();
  }

  public function UpdateType(Request $req)
  {
    $cs = new CsvSetting;
    $i = 0;
    while (true) {
      if (empty($req[$i])) {
        return;
      }
      $cs->where('csv_id', $req[$i]['csv_id'])->update(['csv_col_num' => $req[$i]['csv_col_num']]);

      $i = $i + 1;
    }
  }

  public function TyuzanUp(Request $req)
  {
    $rc = new Reception;
    $i = 0;
    while (true) {
      if (empty($req[$i])) {
        return;
      }
      $rc->where('const_code', $req[$i]['const_code'])->update(['customer' => $req[$i]['customer'], 'rcpt_class' => $req[$i]['rcpt_class']]);

      $i = $i + 1;
    }
  }

  public function Tyuzan()
  {
    $rc = new Reception;
    return $rc->where('rcpt_status', '<', 4)->get();
  }

  public function OneColumnUpdate($id, $col, $val)
  {
    $rc = new Reception;
    $rc->where('recept_id', $id)->update([$col => $val]);
  }

  public function SetData(Request $req, $setTime, $type)
  {
    $rc = new Reception;
    foreach ($req->new as  $row) {
      $rc->create($row['all']);
    }
    foreach ($req->cng as $row) {
      $rc->where('order_code', $row['key'])->update($row['all']);
    }
    foreach ($req->nocng as $row) {
      $rc->where('order_code', $row['key'])->update($row['all']);
    }
    if ($type == 1301) {
      $delData = $rc->where('rcpt_status', '<', 5)->where('set_update_time', '<>', $setTime)->whereNull('detail_code');
    } else {
      $delData = $rc->where('rcpt_status', '<', 5)->where('set_update_time', '<>', $setTime)->whereNotNull('detail_code');
    }
    $rtData = $delData->get();

    return $rtData;
  }

  public function UpUnknownData(Request $req)
  {
    $rc = new Reception;
    $i = 0;
    while (true) {
      if (empty($req[$i])) {
        return;
      }
      $rc->where('recept_id', $req[$i]['recept_id'])->update($req[$i]);

      $i = $i + 1;
    }
  }
}
