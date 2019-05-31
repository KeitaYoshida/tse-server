<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddUniquekeyCheckdata extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::table('t_checkdata_daily', function (Blueprint $table) {
      $table->unique(['workday', 'workcode', 'code'], 'tb_uni_list');
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
      $table->dropUnique('tb_uni_list');
    });
  }
}
