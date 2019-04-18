<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProcessTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('processTbl', function(Blueprint $table)
		{
			$table->string('const', 30)->comment('工事番号 ORG');
			$table->string('orderCode', 30);
			$table->string('orderRCode', 30);
			$table->char('workCode', 10)->comment('工程コード');
			$table->boolean('pFlg')->default(0)->comment('状態（０：未着手、１：完了、2 : 作業中、91：不良あり[停止]、92: 不良あり[不良を残して進行]）');
			$table->integer('pNum')->nullable()->default(0)->comment('工程完了台数');
			$table->string('workUser', 16)->nullable()->default('')->comment('作業者');
			$table->date('workStDay')->nullable()->comment('作業日');
			$table->date('workEdDay')->nullable()->comment('作業終了日');
			$table->date('workEdRevDay')->nullable()->comment('作業終了予定日');
			$table->timestamp('updateDay')->nullable()->default(DB::raw('CURRENT_TIMESTAMP'));
			$table->integer('eNum')->default(0)->comment('不良台数');
			$table->boolean('equFlg')->default(0)->comment('工具使用フラグ');
			$table->string('erInfo', 50)->nullable()->default('')->comment('エラー情報');
			$table->string('remarks', 100)->nullable()->default('')->comment('メモ');
			$table->dateTime('updatedAt');
			$table->dateTime('createdAt');
			$table->primary(['const','workCode']);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('processTbl');
	}

}
