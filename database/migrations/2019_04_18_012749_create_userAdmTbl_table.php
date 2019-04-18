<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUserAdmTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('userAdmTbl', function(Blueprint $table)
		{
			$table->integer('userId')->primary()->comment('ユーザーコード');
			$table->char('userName', 16)->comment('ユーザー名');
			$table->char('department', 30)->comment('部署');
			$table->char('position', 30)->comment('役職');
			$table->integer('authority')->default(0)->comment('権限 0:all, 1:boss, 2:check, 3:bus, 5:mane, 6:mane_boss, 7:gMane, 99:deb');
			$table->integer('bossId')->default(0);
			$table->integer('managerId')->default(0);
			$table->boolean('DEBUG', 1)->default('b\'0\'')->comment('デバッガー');
			$table->boolean('BOSS', 1)->default('b\'0\'')->comment('主任以上');
			$table->boolean('TEHAI', 1)->default('b\'0\'')->comment('手配');
			$table->boolean('KIKO', 1)->default('b\'0\'')->comment('起工');
			$table->boolean('NOHIN', 1)->default('b\'0\'')->comment('納品');
			$table->boolean('CHUNITEI', 1)->default('b\'0\'')->comment('中日程');
			$table->boolean('KENSA', 1)->default('b\'0\'')->comment('出荷検査');
			$table->boolean('RECEPT', 1)->default('b\'0\'')->comment('受付データ操作');
			$table->boolean('PROCESSMST', 1)->default('b\'0\'');
			$table->boolean('EQUIPADM', 1)->default('b\'0\'')->comment('工具管理者');
			$table->integer('checkerId')->nullable()->comment('検査ID');
			$table->integer('pass')->nullable()->unique('pass')->comment('パスコード');
			$table->integer('vacationMax')->default(10)->comment('有給数');
			$table->integer('vacation')->default(10)->comment('有給残数');
			$table->integer('vTimeMax')->default(10)->comment('有給時間数');
			$table->float('vTime', 10, 0)->default(10)->comment('有給時間残数');
			$table->float('holidayNum', 10, 0)->default(0)->comment('欠勤数');
			$table->float('etcVacNum', 10, 0)->default(0)->comment('慶長休暇数');
			$table->dateTime('createdAt');
			$table->dateTime('updatedAt');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('userAdmTbl');
	}

}
