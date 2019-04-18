<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCheckCodeMstTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('checkCodeMst', function(Blueprint $table)
		{
			$table->char('dataCheckCode', 10)->primary();
			$table->string('baseVal', 50);
			$table->string('valRule', 10);
			$table->string('maxVal', 50);
			$table->string('viewRule', 10);
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
		Schema::drop('checkCodeMst');
	}

}
