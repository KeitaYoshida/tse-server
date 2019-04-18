<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProcessAssyMstTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('processAssyMst', function(Blueprint $table)
		{
			$table->integer('index', true);
			$table->string('assy', 50)->comment('親形式');
			$table->integer('row')->comment('表示順');
			$table->string('class', 50)->nullable()->comment('区分');
			$table->string('checkVal', 200)->nullable()->comment('確認値');
			$table->string('beforeDataFlg', 50)->nullable()->comment('前回データ表示フラグ');
			$table->integer('checkRow')->default(1)->comment('確認時表示行数');
			$table->string('line', 50)->nullable()->comment('作業ライン');
			$table->string('checkRule', 50)->nullable()->comment('確認方法');
			$table->integer('e_num')->default(0)->comment('使用工具数');
			$table->unique(['assy','row'], 'assy_row');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('processAssyMst');
	}

}
