<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class Uploader extends Controller
{
  public function upload(Request $req)
  {
    $fileType = substr($req->type, 6);
    $filePath = '/img' . $req->path . $req->item_code . '/' . $req->item_rev;
    $fileName = $filePath . '/' . date('YmdHms') . '_' . uniqid() . '.' . $fileType;
    list(, $fileData) = explode(';', $req->base64);
    list(, $fileData) = explode(',', $fileData);
    $fileData = base64_decode($fileData);

    Storage::disk('public')->put($fileName, $fileData, 'public');

    return 'ok';
  }

  public function get_image(Request $req)
  {
    $disk = Storage::disk('public');
    $filePath = $req->path;
    if (!$disk->exists($filePath)) {
      return;
    };
    $files = $disk->files($filePath);
    foreach ($files as $key => $img) {
      $ext = substr($img, strrpos($img, '.') + 1);
      $text = 'data:image/' . $ext . ';base64,';
      $imgs[$key]['base64'] =  $text . base64_encode($disk->get($img));
      $imgs[$key]['path'] =  $img;
    }
    return $imgs;
    // return $filePath;
  }

  public function delete_image(Request $req)
  {
    $disk = Storage::disk('public');
    $filePath = $req->path;
    $disk->delete($filePath);

    return 'ok';
  }
}
