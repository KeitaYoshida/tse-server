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
    return $rc->where('rcpt_status', '<=', 4)->get();
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

  public function GetNohinList(Request $req)
  {
    $rc = new Reception;
    foreach ($req->all() as $val) {
      $row = $rc->where('detail_code', $val['detail_code'])->get()[0];
      $set_num = $val['nohin_num'];
      $set_day = $val['last_nohin_day'];
      $order_num = $row['order_num'];
      $nohin_num = $row['nohin_num'];
      $last_nohin_day = $row['last_nohin_day'];
      $submit_num = 0;
      $submit_day = 0;
      if ($last_nohin_day === 0) {
        $submit_num = $set_num;
        $submit_day = $set_day;
      } elseif ($set_day <=  $last_nohin_day) {
        continue;
      } else {
        $submit_num = $nohin_num + $set_num;
        $submit_day = $set_day;
      }
      if ($submit_num >= $order_num) {
        $order_flg = 5;
      } else {
        $order_flg = 3;
      }
      $rc->where('detail_code', $val['detail_code'])->update(
        ['nohin_num' => $submit_num, 'last_nohin_day' => $submit_day, 'rcpt_status' => $order_flg]
      );
    }
    return $row;
  }
}
