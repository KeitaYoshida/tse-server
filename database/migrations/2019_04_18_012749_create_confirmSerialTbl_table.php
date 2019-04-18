<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateConfirmSerialTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('confirmSerialTbl', function(Blueprint $table)
		{
			$table->integer('index', true);
			$table->string('model', 30)->comment('形式');
			$table->string('const', 30)->comment('工事番号');
			$table->integer('no')->comment('シリアル');
			$table->string('noText', 20)->comment('シリアル添字');
			$table->string('customer', 50)->comment('納入先');
			$table->integer('checkerId')->comment('確認者ID');
			$table->string('checkerName', 50)->comment('確認者');
			$table->string('finUserName', 50)->comment('調整者');
			$table->string('listCodeId', 50)->comment('図面品番');
			$table->string('listCodeRev', 10)->comment('図面Rev');
			$table->timestamp('checkDate')->default(DB::raw('CURRENT_TIMESTAMP'))->comment('確認日');
			$table->dateTime('finDate')->default('0000-00-00 00:00:00')->comment('完了日');
			$table->string('memo', 500)->nullable()->comment('備考');
			$table->dateTime('updatedAt');
			$table->dateTime('createdAt');
			$table->unique(['const','no'], 'const_no');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('confirmSerialTbl');
	}

}
