<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForErrorData extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::table('t_errordata_daily', function (Blueprint $table) {
      $table->bigInteger('checkdata_id')->unsigned('checkdata_id')->change();
      $table->foreign('checkdata_id')->references('checkdata_id')->on('t_checkdata_daily')->onUpdate('cascade')->onDelete('cascade');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::table('t_errordata_daily', function (Blueprint $table) {
      $table->dropForeign('t_errordata_daily_checkdata_id_foreign');
    });
  }
}
