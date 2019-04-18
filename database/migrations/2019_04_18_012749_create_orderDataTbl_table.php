<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateOrderDataTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('orderDataTbl', function(Blueprint $table)
		{
			$table->integer('index', true);
			$table->string('model', 30)->index('model')->comment('形式');
			$table->string('const', 30)->index('const')->comment('工事番号');
			$table->string('assyCode', 20)->nullable()->comment('親品目');
			$table->integer('assyCodeNum')->nullable()->comment('連');
			$table->string('itemCode', 30)->comment('品目コード');
			$table->integer('orderNum')->comment('注文数');
			$table->integer('useLastNum')->comment('在庫使用数');
			$table->date('orderDay')->comment('注文日');
			$table->string('orderClass', 20)->comment('注文区分');
			$table->string('orderMemo', 60)->comment('摘要');
			$table->integer('acceptNum')->nullable()->comment('受入数');
			$table->date('acceptDay')->nullable()->comment('受入日');
			$table->timestamp('insertDate')->default(DB::raw('CURRENT_TIMESTAMP'))->comment('手配日自動');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('orderDataTbl');
	}

}
