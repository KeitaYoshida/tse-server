<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateReservationTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('reservationTbl', function(Blueprint $table)
		{
			$table->dateTime('dayTimeFrom');
			$table->dateTime('dayTimeTo');
			$table->boolean('contents');
			$table->string('user', 30);
			$table->string('purpose', 100);
			$table->timestamp('chgDay')->default(DB::raw('CURRENT_TIMESTAMP'));
			$table->string('chgPc', 100);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('reservationTbl');
	}

}
