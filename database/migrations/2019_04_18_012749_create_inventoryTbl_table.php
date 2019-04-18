<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateInventoryTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('inventoryTbl', function(Blueprint $table)
		{
			$table->integer('index', true);
			$table->integer('ym')->default(0)->comment('年月');
			$table->string('itemCode', 50)->nullable()->comment('形式');
			$table->string('orderListCode', 100)->nullable()->comment('包括注文明細CD');
			$table->string('HIKIAINUM', 20)->nullable()->comment('引合番号');
			$table->string('orderConstCode', 50)->nullable()->comment('手配工事番号');
			$table->string('inConstCode', 100)->nullable()->comment('包括工事番号');
			$table->integer('orderNum')->nullable()->comment('手配数');
			$table->integer('shipmentNum')->nullable()->comment('出荷数');
			$table->integer('lastNum')->nullable()->comment('出荷残数');
			$table->integer('makeLastNum')->nullable()->comment('製品在庫数');
			$table->integer('makkingNum')->nullable()->comment('投入数');
			$table->string('MOCHIDASHI', 20)->nullable()->comment('持出者');
			$table->string('KIBAN_CHK', 20)->nullable()->comment('基板確認者');
			$table->string('BANKIN_CHK', 20)->nullable()->comment('板金確認者');
			$table->string('orderStatus', 20)->nullable()->comment('手配状況');
			$table->char('shipmentStatus', 20)->nullable()->comment('出荷状況');
			$table->integer('totalAcceptMy')->nullable()->comment('発注金額');
			$table->integer('totalCalcuMy')->nullable()->comment('棚卸し金額');
			$table->integer('receptionMy')->nullable()->comment('受入金額');
			$table->integer('processMy')->nullable()->comment('加工費');
			$table->date('chackDate')->nullable()->comment('棚卸日');
			$table->string('memo', 200)->nullable()->comment('備考');
			$table->unique(['ym','itemCode','orderConstCode'], 'un');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('inventoryTbl');
	}

}
