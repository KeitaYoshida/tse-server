<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateConfirmContentsTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('confirmContentsTbl', function(Blueprint $table)
		{
			$table->integer('index', true);
			$table->string('const', 20);
			$table->integer('serial');
			$table->integer('no');
			$table->string('value', 200);
			$table->string('data', 100);
			$table->string('viewRule', 10)->nullable();
			$table->string('viewUnit', 10)->nullable();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('confirmContentsTbl');
	}

}
