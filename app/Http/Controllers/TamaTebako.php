<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TamaTebako extends Controller
{
  private $urlHead = 'http://';
  private $urlHost = 'app22.tamagawa-seiki.co.jp';
  private $urlFile = 'thcutl/json.php/serv_thcutl.getMCFinfo';
  private $connectPass;

  public function __construct()
  {
    $this->connectPass = config('app.tama_key');
  }

  public function test()
  {
    $dataKey = '%5E4180042673-1';
    $time = date('Hms');
    $base_url = $this->urlHead . $this->urlHost;
    $client = new \GuzzleHttp\Client([
      'base_uri' => $base_url,
    ]);

    $dem = '/';
    $data_code =  $this->urlFile . $dem . $dataKey . $dem . $this->connectPass . $dem . $time;
    $response = $client->request(
      'GET',
      $data_code,
      [
        'allow_redirects' => true,
      ]
    );
    $response_body = (string)$response->getBody();
    return $response_body;
  }
}
