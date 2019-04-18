<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateWorkDataTblTmpTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('workDataTblTmp', function(Blueprint $table)
		{
			$table->string('model', 20);
			$table->string('workCode', 20);
			$table->integer('colNum');
			$table->string('val', 20);
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
		Schema::drop('workDataTblTmp');
	}

}
