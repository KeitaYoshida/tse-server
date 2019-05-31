<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateErrordataDaily extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('t_errordata_daily', function (Blueprint $table) {
      $table->bigIncrements('error_id');
      $table->date('workday');
      $table->string('workcode', 64);
      $table->string('workuser', 64);
      $table->string('code', 64);
      $table->string('val', 64);
      $table->timestamps();
      $table->index(['workcode', 'workday'], 'daily_index');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('t_errordata_daily');
  }
}
