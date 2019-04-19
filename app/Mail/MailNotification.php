<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class MailNotification extends Mailable
{
  use Queueable, SerializesModels;

  protected $title;
  protected $text;
  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct($name = 'test', $text = 'send test mail')
  {
    $this->title = sprintf('to: %s send test mail', $name);
    $this->text = $text;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build()
  {
    return $this->view('emails.notification')
      ->text('emails.notification_plain')
      ->subject($this->title)
      ->with([
        'text' => $this->text,
      ]);
  }
}
