<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSubstrateMstTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('substrateMst', function(Blueprint $table)
		{
			$table->integer('index', true);
			$table->char('model', 30)->comment('形式');
			$table->boolean('subInt')->comment('形式内インデックス');
			$table->boolean('row')->comment('表示順');
			$table->string('substrate', 14)->comment('親型式名');
			$table->unique(['model','subInt'], 'model');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('substrateMst');
	}

}
