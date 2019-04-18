<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateConstSummaryTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('constSummaryTbl', function(Blueprint $table)
		{
			$table->string('const', 20)->primary()->comment('工事番号');
			$table->string('model', 20)->comment('形式');
			$table->string('class', 10)->nullable()->comment('受注区分');
			$table->string('includes', 150)->nullable()->comment('包括注文コード');
			$table->boolean('flg')->default(0)->comment('手配フラグ');
			$table->date('orDay')->nullable()->comment('発注日');
			$table->date('rqDay')->nullable()->comment('納入予定日');
			$table->integer('num')->comment('工事台数');
			$table->string('remarks', 200)->nullable();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('constSummaryTbl');
	}

}
