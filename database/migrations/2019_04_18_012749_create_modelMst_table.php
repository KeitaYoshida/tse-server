<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateModelMstTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('modelMst', function(Blueprint $table)
		{
			$table->string('model', 30)->primary()->comment('形式');
			$table->string('itemCode', 30);
			$table->char('rev', 5)->default('noChk')->comment('レヴィジョン');
			$table->string('customer', 50)->nullable();
			$table->integer('unitPrice')->nullable()->comment('手配単価');
			$table->integer('salsePrice')->nullable()->comment('最終売上単価');
			$table->integer('inBoxNum')->default(1)->comment('入り数');
			$table->integer('splitNum')->default(10)->comment('起工時分割数');
			$table->string('sendName', 50)->nullable()->comment('納入先');
			$table->string('snAdd', 10)->nullable()->comment('SN添字');
			$table->string('chkItemCode', 20)->nullable()->comment('検査成績書図面番号');
			$table->string('chkItemRev', 10)->nullable()->comment('検査成績書レヴィジョン');
			$table->boolean('itemMstFlg')->default(0)->comment('品目マスタ登録フラグ');
			$table->date('itemMstSetDate')->nullable()->comment('アイテムマスタ登録日');
			$table->boolean('unnecessarySNflg')->nullable()->comment('シリアル不要フラグ');
			$table->string('memo', 200)->nullable()->comment('備考');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('modelMst');
	}

}
