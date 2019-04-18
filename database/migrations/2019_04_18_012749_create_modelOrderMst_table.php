<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateModelOrderMstTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('modelOrderMst', function(Blueprint $table)
		{
			$table->integer('index', true);
			$table->string('model', 30)->comment('形式');
			$table->string('orderName', 30)->comment('手配先');
			$table->char('rev', 5)->default('noChk')->comment('レヴィジョン');
			$table->string('itemCode', 30)->comment('品目コード');
			$table->string('inventoryClass', 20)->nullable()->default('0:棚卸し不要')->comment('棚卸し区分0:不要,1要,2Lot勘定,3外部製造品');
			$table->string('itemClass', 20)->nullable()->default('0:手配不要')->comment('分類');
			$table->string('itemClassTmp', 20)->nullable()->comment('一時分類');
			$table->string('assyCode', 14)->comment('Assy型番');
			$table->integer('assyNum')->default(0)->comment('連番');
			$table->integer('itemNum')->default(1)->comment('員数');
			$table->unique(['model','orderName','itemCode','assyCode','rev'], 'model_orderName');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('modelOrderMst');
	}

}
