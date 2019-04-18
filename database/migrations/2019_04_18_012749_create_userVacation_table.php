<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUserVacationTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('userVacation', function(Blueprint $table)
		{
			$table->integer('userId')->comment('ユーザーID');
			$table->boolean('flg')->default(0)->comment('0:申請,1,主任承認済み,2:課長承認済,5:取り消し申請中,6:取り消し済み');
			$table->string('userName', 16)->comment('ユーザー名');
			$table->integer('day')->comment('取得日');
			$table->char('eType', 1)->comment('申請区分:0終日,1午前休,2午後休,3:8-10時,4:10-12時,5:13-15時,6:15-17時,7:8-15時,8:10-15時,9:10-17時,a:9-11時,b:9-14時, c:11-14時, d:11-16時');
			$table->boolean('vType')->comment('0:有給休暇,1:慶弔休暇,2:欠勤');
			$table->integer('bossId')->default(0);
			$table->string('bossChk', 16)->nullable()->comment('主任承認');
			$table->integer('managerId')->default(0);
			$table->string('managerChk', 16)->nullable()->comment('課長承認');
			$table->string('useVal', 11)->nullable()->comment('使用休暇カラム');
			$table->integer('rqDay')->default(0)->comment('申請日');
			$table->dateTime('updatedAt');
			$table->dateTime('createdAt');
			$table->primary(['userId','day','eType','userName']);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('userVacation');
	}

}
