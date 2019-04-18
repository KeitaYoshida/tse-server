<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateReceptionSerialTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('receptionSerialTbl', function(Blueprint $table)
		{
			$table->increments('index')->comment('インデックス');
			$table->string('orderPlanCode', 30)->index('orders')->comment('発注予定No');
			$table->string('makeCodeParent', 30)->comment('製造親コード');
			$table->string('makeCode', 30)->index('makeCode')->comment('製造コード');
			$table->integer('makeCodeCount')->nullable()->comment('製造単位台数');
			$table->integer('inCount')->comment('台数カウンタ');
			$table->string('orderModel', 30)->comment('受付形式');
			$table->string('model', 30)->comment('手配形式');
			$table->string('assy', 30)->comment('親形式');
			$table->integer('num')->comment('シリアルNo');
			$table->integer('allProcessNum')->nullable()->comment('総プロセス数');
			$table->integer('finProcessNum')->default(0)->comment('完了プロセス数');
			$table->string('productionStatus', 50)->nullable()->comment('製造状況');
			$table->string('makingFlg', 50)->comment('検査フラグ');
			$table->string('shipmentFlg', 50)->comment('納品予定フラグ');
			$table->string('memo', 200)->nullable()->comment('備考');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('receptionSerialTbl');
	}

}
