<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProcessAuthorityTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('processAuthority', function(Blueprint $table)
		{
			$table->integer('index', true);
			$table->integer('patternCode');
			$table->boolean('authority');
			$table->string('authorityName', 20);
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
		Schema::drop('processAuthority');
	}

}
