<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateEquipTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('equipTbl', function(Blueprint $table)
		{
			$table->char('equipCode', 8);
			$table->date('workDay');
			$table->string('const', 30);
			$table->char('workCode', 10);
			$table->char('model', 14);
			$table->string('chkData1', 20)->nullable();
			$table->string('chkData2', 20)->nullable();
			$table->string('chkData3', 20)->nullable();
			$table->dateTime('updatedAt');
			$table->dateTime('createdAt');
			$table->primary(['equipCode','workDay','const','workCode']);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('equipTbl');
	}

}
