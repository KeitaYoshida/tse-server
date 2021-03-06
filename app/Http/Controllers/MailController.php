<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\MailNotification;

class MailController extends Controller
{
  public function MailNotification()
  {
    $name = 'ララベル太郎';
    $text = 'これからもよろしくお願いいたします。';
    $to = 'yoshida.com0503@gmail.com';
    Mail::to($to)->send(new MailNotification($name, $text));
  }
}
