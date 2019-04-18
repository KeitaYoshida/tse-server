<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateErrorDataTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('errorDataTbl', function(Blueprint $table)
		{
			$table->increments('errorCode')->comment('エラーID');
			$table->string('model', 30)->comment('形式');
			$table->string('bordCode', 14)->nullable()->comment('アッシー型番');
			$table->string('const', 30)->comment('工事番号');
			$table->char('workCode', 10)->comment('工程コード');
			$table->integer('serial')->nullable()->comment('シリアルNo');
			$table->string('class_C', 50)->comment('発生場所');
			$table->integer('class_D')->nullable();
			$table->string('class_A', 50)->comment('異常区分');
			$table->string('case', 200)->comment('異常内容');
			$table->string('erOp', 200)->comment('現品処置の指示');
			$table->string('inputUser', 16)->default('0')->comment('報告者');
			$table->string('updateUser', 16)->nullable()->comment('更新者');
			$table->timestamp('caseDate')->default(DB::raw('CURRENT_TIMESTAMP'));
			$table->boolean('statusFlg')->default(0)->comment('0:申請,1:主任承認,2:課長承認,3:検査承認,5対応完了');
			$table->dateTime('updatedAt');
			$table->dateTime('createdAt');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('errorDataTbl');
	}

}
