<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Chengeindex2CheckdataDaily extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::table('t_checkdata_daily', function (Blueprint $table) {
      $table->dropIndex('not-const-check');
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
      $table->index(['workcode', 'workday'], 'not-const-check');
    });
  }
}
