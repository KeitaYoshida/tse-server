<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateItemTmpTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('itemTmp', function(Blueprint $table)
		{
			$table->string('itemCode', 100)->nullable();
			$table->string('orderName', 100)->nullable();
			$table->string('itemModelName', 100)->nullable();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('itemTmp');
	}

}
