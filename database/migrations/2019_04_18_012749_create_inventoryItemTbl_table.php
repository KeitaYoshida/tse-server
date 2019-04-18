<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateInventoryItemTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('inventoryItemTbl', function(Blueprint $table)
		{
			$table->integer('index', true)->comment('インデックス');
			$table->integer('ym')->comment('棚卸し年月');
			$table->string('model', 30)->comment('製品型番');
			$table->string('orderConstCode', 20)->comment('手配工事番号');
			$table->string('orderRcptCode', 50)->nullable()->comment('引合番号');
			$table->string('assyCode', 50)->nullable()->comment('ASSY型番');
			$table->integer('assyNum')->nullable()->comment('連番');
			$table->string('itemCode', 50)->nullable()->comment('品目コード');
			$table->string('itemModel', 50)->nullable()->comment('形式');
			$table->string('orderCustomName', 50)->nullable()->comment('発注先名');
			$table->string('itemName', 50)->nullable()->comment('品名');
			$table->string('itemMaker', 50)->nullable()->comment('メーカー');
			$table->integer('itemSetNum')->nullable()->comment('員数');
			$table->integer('onePrice')->nullable()->comment('単価');
			$table->integer('needNum')->nullable()->comment('必要数');
			$table->integer('orderNum')->nullable()->comment('発注数');
			$table->integer('orderPrice')->nullable()->comment('発注金額');
			$table->integer('rcptNum')->nullable()->comment('受入数');
			$table->integer('rcptPrice')->nullable()->comment('受入金額');
			$table->integer('inventoryNum')->nullable();
			$table->integer('inventoryPrice')->nullable();
			$table->string('memo', 200)->nullable();
			$table->unique(['ym','model','orderConstCode','assyCode','itemCode','orderCustomName'], 'ym');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('inventoryItemTbl');
	}

}
