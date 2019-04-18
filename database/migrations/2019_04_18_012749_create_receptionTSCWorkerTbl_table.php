<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateReceptionTSCWorkerTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('receptionTSCWorkerTbl', function(Blueprint $table)
		{
			$table->string('constWorker', 10)->primary()->comment('受注番号');
			$table->string('const', 9)->comment('工事番号');
			$table->string('customer', 100)->comment('得意先');
			$table->string('class', 10)->comment('受注区分');
			$table->integer('num')->comment('受注数');
			$table->timestamp('update')->default(DB::raw('CURRENT_TIMESTAMP'))->comment('登録更新日');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('receptionTSCWorkerTbl');
	}

}
