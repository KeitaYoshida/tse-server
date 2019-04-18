<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateConstWorkMonthGoalTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('constWorkMonthGoal', function(Blueprint $table)
		{
			$table->integer('workMonth')->primary()->comment('中日程月');
			$table->integer('goalPrice')->comment('目標金額');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('constWorkMonthGoal');
	}

}
