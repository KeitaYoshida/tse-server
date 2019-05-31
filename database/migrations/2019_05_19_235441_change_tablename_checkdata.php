<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeTablenameCheckdata extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::rename('t_checkdata', 't_checkdata_kokuin');
    Schema::table('t_checkdata_kokuin', function (Blueprint $table) {
      $table->renameColumn('colcode', 'code');
      $table->renameColumn('checkval', 'val');
      $table->dropColumn('workindex');
      $table->dropColumn('constcode');
      $table->dropColumn('serialno');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::rename('t_checkdata_kokuin', 't_checkdata');
    Schema::table('t_checkdata', function (Blueprint $table) {
      $table->renameColumn('code', 'colcode');
      $table->renameColumn('val', 'checkval');
      $table->integer('workindex');
      $table->string('constcode', 64);
      $table->string('serialno', 64);
    });
  }
}
