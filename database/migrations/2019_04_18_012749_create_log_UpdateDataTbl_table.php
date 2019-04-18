<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateLogUpdateDataTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('log_UpdateDataTbl', function(Blueprint $table)
		{
			$table->integer('index', true);
			$table->integer('userId')->default(0)->index('userId');
			$table->string('useIp', 50)->nullable();
			$table->string('log', 10000);
			$table->timestamp('update')->nullable()->default(DB::raw('CURRENT_TIMESTAMP'));
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
		Schema::drop('log_UpdateDataTbl');
	}

}
