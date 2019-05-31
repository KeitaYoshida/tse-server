<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeErrorDataToOnerow extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::table('t_errordata_daily', function (Blueprint $table) {
      $table->bigInteger('checkdata_id')->unique()->comment('確認データコード');
      $table->dropColumn('workday');
      $table->dropColumn('workcode');
      $table->dropColumn('workuser');
      $table->dropColumn('code');
      $table->dropColumn('val');
      $table->string('detail_error')->comment('異常の詳細');
      $table->string('user_order')->comment('異常処置指示者');
      $table->string('user_work')->comment('処置担当者');
      $table->string('detail_action')->comment('処置の詳細');
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
      $table->date('workday');
      $table->string('workcode', 64);
      $table->string('workuser', 64);
      $table->string('code', 64);
      $table->string('val', 64);
      $table->dropColumn('checkdata_id');
      $table->dropColumn('detail_error');
      $table->dropColumn('user_order');
      $table->dropColumn('user_work');
      $table->dropColumn('detail_action');
    });
  }
}
