<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\User;
use App\Model\UserShonin;

class UserCtrl extends Controller
{
  public function  RtUserInfoAll()
  {
    $u = new User;
    return $u->all();
  }

  public function MakeShoninRelation(Request $req, $uid)
  {
    $us = new UserShonin;
    $us->where('user_id', $uid)->delete();
    // $us->fill($req->all())->save();
    foreach ($req->all() as $key => $val) {
      $us->create($val);
    }
  }

  public function RtShoninChild($uid)
  {
    $u = new User;
    return $u->where('id', $uid)->with('shonin.userdata')->get();
  }
}
