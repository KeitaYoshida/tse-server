<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Chengecolumn2CheckdataDaily extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::table('t_checkdata_daily', function (Blueprint $table) {
      $table->string('val', 1024)->change();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::table('t_checkdata_daily', function (Blueprint $table) {
      $table->string('val', 256)->change();
    });
  }
}
