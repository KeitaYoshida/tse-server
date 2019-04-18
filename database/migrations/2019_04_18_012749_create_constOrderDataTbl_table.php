<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateConstOrderDataTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('constOrderDataTbl', function(Blueprint $table)
		{
			$table->integer('index', true)->comment('インデックス');
			$table->string('model', 50)->comment('形式');
			$table->string('orderConstCode', 50);
			$table->string('assyCode', 50)->nullable()->comment('Assy型番');
			$table->integer('assyNum')->nullable()->comment('連番');
			$table->string('itemCode', 50)->comment('品目コード');
			$table->string('rev', 20)->nullable()->comment('レヴィジョン');
			$table->string('itemName', 80)->nullable()->comment('品名');
			$table->string('itemModelName', 80)->nullable()->comment('品目形式名');
			$table->string('inventoryClass', 50)->nullable()->comment('棚卸し区分');
			$table->string('orderClass', 50)->nullable()->comment('手配区分');
			$table->integer('num_Pre')->comment('員数');
			$table->integer('num_All')->comment('手配全数');
			$table->integer('num_Order')->nullable()->comment('手配数');
			$table->integer('num_Recept')->nullable()->comment('受入数');
			$table->string('orderName', 50)->nullable()->comment('発注先');
			$table->integer('orderMoney')->nullable()->comment('手配単価');
			$table->integer('dataMoney')->nullable()->comment('DB金額');
			$table->date('orderSetDate')->nullable()->comment('手配指定日');
			$table->timestamp('insertDate')->default(DB::raw('CURRENT_TIMESTAMP'))->comment('登録日');
			$table->unique(['orderConstCode','assyCode','itemCode','orderName','rev','assyNum'], 'orderConstCode');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('constOrderDataTbl');
	}

}
