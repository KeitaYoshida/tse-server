<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateWorkDataMstTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('workDataMst', function(Blueprint $table)
		{
			$table->integer('index', true);
			$table->char('model', 30);
			$table->char('workCode', 10);
			$table->integer('colmnCheckCode');
			$table->boolean('viewFlg')->default(0);
			$table->string('aboutWork', 200);
			$table->string('coution', 200)->nullable();
			$table->integer('rowNum');
			$table->char('dataCheckCode', 12);
			$table->dateTime('updatedAt');
			$table->dateTime('createdAt');
			$table->unique(['model','workCode','colmnCheckCode'], 'model');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('workDataMst');
	}

}
