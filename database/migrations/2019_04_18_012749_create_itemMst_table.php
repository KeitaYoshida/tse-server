<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateItemMstTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('itemMst', function(Blueprint $table)
		{
			$table->integer('index', true);
			$table->string('itemCode', 30)->comment('品目コード');
			$table->string('orderOnlyItemCode', 30)->nullable()->index('orderOnlyItemCode')->comment('代替え品目コード');
			$table->string('itemName', 50)->nullable()->comment('品名');
			$table->string('itemModelName', 50)->nullable()->comment('形式');
			$table->char('itemRev', 5)->default('noChk')->comment('レヴィジョン');
			$table->string('itemBClass', 50)->nullable()->comment('区分');
			$table->string('makerName', 30)->nullable()->comment('製作元');
			$table->float('price', 10, 0)->nullable()->comment('値段');
			$table->string('orderName', 30)->comment('手配先');
			$table->integer('readTime')->nullable()->comment('リードタイム');
			$table->integer('stockNum')->default(0)->comment('残数');
			$table->integer('inventoryNum')->default(0)->comment('棚卸し数');
			$table->integer('reservationNum')->default(0)->comment('使用予約数');
			$table->unique(['itemCode','orderName'], 'itemCode');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('itemMst');
	}

}
