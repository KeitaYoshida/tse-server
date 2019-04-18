<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSubstrateTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('substrateTbl', function(Blueprint $table)
		{
			$table->integer('index', true);
			$table->char('model', 30);
			$table->string('const', 30);
			$table->boolean('subIndex');
			$table->integer('baseSerial');
			$table->integer('serials');
			$table->dateTime('updatedAt');
			$table->dateTime('createdAt');
			$table->index(['const','subIndex'], 'BASESERIALSASCONST');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('substrateTbl');
	}

}
