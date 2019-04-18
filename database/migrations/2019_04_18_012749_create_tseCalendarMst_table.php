<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateTseCalendarMstTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('tseCalendarMst', function(Blueprint $table)
		{
			$table->date('day')->primary();
			$table->string('wMonth', 10);
			$table->boolean('dayFlg')->default(0);
			$table->char('dayWa', 2);
			$table->string('dayMem', 30)->nullable();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('tseCalendarMst');
	}

}
