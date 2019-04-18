<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateClientMstTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('clientMst', function(Blueprint $table)
		{
			$table->char('clientCode', 3)->primary()->comment('取引先コード');
			$table->string('name', 50);
			$table->string('memo', 300)->nullable();
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
		Schema::drop('clientMst');
	}

}
