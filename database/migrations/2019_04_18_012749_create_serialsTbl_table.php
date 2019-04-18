<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSerialsTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('serialsTbl', function(Blueprint $table)
		{
			$table->integer('index', true);
			$table->char('workCode', 10);
			$table->integer('serials');
			$table->string('const', 30);
			$table->char('userName', 16)->default(0);
			$table->boolean('status')->default(0)->comment('０：未着手、１：完了、2 : 作業中, 5:検査待ち, 6:出荷待ち, 7:出荷済み、9：不良');
			$table->date('shipmentDay')->nullable();
			$table->string('remarks', 200)->default('');
			$table->timestamp('updateTime')->default(DB::raw('CURRENT_TIMESTAMP'));
			$table->index(['workCode','const'], 'makeSNPage');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('serialsTbl');
	}

}
