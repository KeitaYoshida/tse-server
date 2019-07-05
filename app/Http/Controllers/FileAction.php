<?php

namespace App\Http\Controllers;

use Rap2hpoutre\FastExcel\FastExcel;
use Illuminate\Http\Request;

class FileAction extends Controller
{
  function XlsxToCsv(Request $req)
  {
    $XLSX = new FastExcel;
    $collection = $XLSX->import($req->xlsx);

    return $collection;
  }
}
