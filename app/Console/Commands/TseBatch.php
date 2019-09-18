<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class TseBatch extends Command
{
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'tse:regular';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'regular action of tse';

  /**
   * Create a new command instance.
   *
   * @return void
   */
  public function __construct()
  {
    parent::__construct();
  }

  /**
   * Execute the console command.
   *
   * @return mixed
   */
  public function handle()
  {
    $item = new \App\Model\Item;
    $cnt = $item->get(
      [
        DB::raw('SUM(last_num) * item_price as last_price'),
        DB::raw('SUM(appo_num) * item_price as appo_price'),
        DB::raw('SUM(order_num) * item_price as order_price')
      ]
    )[0]->toArray();
    $day = new \App\Model\Daily;
    $day->create($cnt);
  }
}
