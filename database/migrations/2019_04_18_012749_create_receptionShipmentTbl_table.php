<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateReceptionShipmentTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('receptionShipmentTbl', function(Blueprint $table)
		{
			$table->integer('baseIndex')->primary();
			$table->string('workMonth', 50)->index('workMonth');
			$table->date('setDate')->index('setDate');
			$table->timestamp('addDate')->default(DB::raw('CURRENT_TIMESTAMP'));
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('receptionShipmentTbl');
	}

}
