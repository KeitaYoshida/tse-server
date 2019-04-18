<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateClientTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('clientTbl', function(Blueprint $table)
		{
			$table->char('clientCode', 3)->comment('取引先コード');
			$table->string('model', 20)->comment('形式');
			$table->dateTime('updatedAt');
			$table->dateTime('createdAt');
			$table->primary(['clientCode','model']);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('clientTbl');
	}

}
