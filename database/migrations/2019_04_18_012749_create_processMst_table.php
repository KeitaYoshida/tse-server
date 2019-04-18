<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProcessMstTable extends Migration
{

  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('processMst', function (Blueprint $table) {
      $table->integer('index', true);
      $table->char('model', 30)->comment('形式');
      $table->char('workCode', 12)->comment('作業コード');
      $table->string('processClass', 10)->nullable()->comment('工程区分');
      $table->char('processName', 50)->nullable()->comment('工程名');
      $table->boolean('viewSNColumn')->nullable()->comment('削除予定（chackFlgに変更）');
      $table->boolean('workAuthority')->default(0)->comment('作業権限');
      $table->integer('num')->default(0)->comment('表示順');
      $table->string('workLine', 50)->comment('作業ライン');
      $table->integer('equipNum')->nullable()->comment('必要工具数');
      $table->boolean('chackFlg')->default(0)->comment('0:工程確認のみ、1:シリアル確認まで、2:詳細確認');
      $table->dateTime('updatedAt');
      $table->dateTime('createdAt');
      $table->unique(['model', 'workCode'], 'model');
    });
  }


  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::drop('processMst');
  }
}
