<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ErrorDataDaily;

class ErrorDataDailyController extends Controller
{
  public function store(Request $request)
  {
    $error = new ErrorDataDaily;
    $error->fill($request->all())->save();
  }
  //
}
