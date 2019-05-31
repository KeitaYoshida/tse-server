<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddChangeColumnCheckdata extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::rename('checkdata', 't_checkdata');
    Schema::table('t_checkdata', function (Blueprint $table) {
      $table->renameColumn('id', 'checkdata_id');
      $table->date('workday')->change();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::rename('t_checkdata', 'checkdata');
    Schema::table('checkdata', function (Blueprint $table) {
      $table->renameColumn('id', 'checkdata_id');
      $table->string('workday', 64)->change();
    });
  }
}
