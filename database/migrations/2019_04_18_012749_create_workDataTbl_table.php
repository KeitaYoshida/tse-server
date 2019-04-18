<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateWorkDataTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('workDataTbl', function(Blueprint $table)
		{
			$table->char('model', 30);
			$table->char('serials', 8);
			$table->char('workCode', 10);
			$table->char('colmnCheckCode', 8);
			$table->string('const', 30);
			$table->string('checkStr', 100)->nullable();
			$table->string('coution', 80)->nullable();
			$table->string('data', 50)->nullable();
			$table->boolean('status');
			$table->integer('userId');
			$table->timestamp('inUpDate')->default(DB::raw('CURRENT_TIMESTAMP'));
			$table->char('upPC', 15);
			$table->dateTime('updatedAt');
			$table->dateTime('createdAt');
			$table->primary(['model','serials','workCode','colmnCheckCode','const']);
			$table->index(['workCode','serials'], 'workCode');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('workDataTbl');
	}

}
