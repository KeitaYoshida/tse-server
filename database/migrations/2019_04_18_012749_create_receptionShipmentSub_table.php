<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateReceptionShipmentSubTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('receptionShipmentSub', function(Blueprint $table)
		{
			$table->integer('index', true);
			$table->string('orderPlanCode', 30)->comment('発注予定番号');
			$table->date('setDate')->comment('納品日');
			$table->integer('inBoxNum')->default(0)->comment('入り数');
			$table->integer('boxNum')->default(0)->comment('箱数');
			$table->unique(['orderPlanCode','setDate'], 'orderPlanCode_setDate');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('receptionShipmentSub');
	}

}
