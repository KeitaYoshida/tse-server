<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateReceptionDataTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('receptionDataTbl', function(Blueprint $table)
		{
			$table->integer('infoClass')->comment('情報区分');
			$table->integer('orderPlanCode')->primary()->comment('発注予定NO');
			$table->string('orderListCode', 12)->nullable()->comment('注文書明細NO');
			$table->string('constCode', 30)->nullable()->comment('工事番号');
			$table->string('orderConstCode', 30)->index('orderConstCode')->comment('手配工事番号');
			$table->string('makeConstCode', 30)->nullable()->index('makeConstCode')->comment('製造コード');
			$table->string('itemCode', 30)->nullable()->index('itemCode')->comment('品目CD');
			$table->string('orderModel', 30)->nullable()->comment('手配形式');
			$table->string('itemName', 50)->nullable()->comment('品名');
			$table->integer('orderNum')->nullable()->comment('元受注数量');
			$table->integer('orderChkNum')->nullable()->default(0)->comment('最新受注数量');
			$table->integer('shipmentNum')->default(0)->comment('入荷数');
			$table->integer('checkNum')->default(0)->comment('検査済数');
			$table->integer('errorNum')->default(0)->comment('不良数');
			$table->integer('errorOkNum')->default(0)->comment('不良流用数');
			$table->integer('nocheckNum')->default(0)->comment('未検査数');
			$table->integer('monthWorkSetNum')->nullable()->comment('中日程表登録月');
			$table->string('customerName', 100)->nullable()->comment('取引先');
			$table->string('orderClass', 50)->nullable()->comment('受注区分');
			$table->string('shipsendName', 50)->nullable()->comment('納入先');
			$table->integer('serials')->nullable()->comment('先頭シリアル');
			$table->date('deliveryDate')->nullable()->comment('納期');
			$table->string('orderStatus', 50)->default('0:未手配')->comment('0:未手配');
			$table->string('shipmentStatus', 50)->default('0:未納')->comment('0:未納');
			$table->integer('price_TotalOrder')->nullable()->comment('手配総額');
			$table->integer('price_TotalRecept')->nullable()->comment('受入総額');
			$table->date('orderSetDate')->nullable()->comment('手配時納品指定日');
			$table->date('shipmentDay')->nullable()->comment('納入指定日');
			$table->date('orderPlanDay')->nullable()->comment('発注予定日');
			$table->date('orderDay')->nullable()->comment('発注日');
			$table->date('shipmentPlanDay')->nullable()->comment('納入予定日');
			$table->string('orderMemo1', 100)->nullable()->comment('依頼備考1');
			$table->string('orderMemo2', 100)->nullable()->comment('依頼備考2');
			$table->integer('orderOnePrice')->nullable()->comment('単価');
			$table->string('shipmentAreaCode', 50)->nullable()->comment('納入場所CD');
			$table->string('shipmentMemo', 200)->nullable()->comment('納品備考');
			$table->timestamp('updsateDate')->default(DB::raw('CURRENT_TIMESTAMP'))->comment('登録日');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('receptionDataTbl');
	}

}
