<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateConstWorkMonthTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('constWorkMonthTbl', function(Blueprint $table)
		{
			$table->integer('index', true)->comment('インデックス');
			$table->integer('workMonth')->comment('作業月');
			$table->integer('orderPlanCode')->index('orderPlanCode')->comment('発注予定No');
			$table->string('workRank', 20)->nullable()->comment('優先度');
			$table->integer('numAll')->default(0)->comment('製造総数');
			$table->integer('numEnd')->default(0)->comment('完了台数');
			$table->string('memo', 200)->nullable()->comment('メモ');
			$table->unique(['workMonth','orderPlanCode'], 'workMonth_orderPlanCode');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('constWorkMonthTbl');
	}

}
