<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProductionListTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('productionListTbl', function(Blueprint $table)
		{
			$table->integer('index', true);
			$table->integer('serialIndex')->index('serialIndex')->comment('シリアル番号');
			$table->integer('unitCount');
			$table->integer('processIndex')->index('processIndex')->comment('工程マスタコード');
			$table->integer('subInt');
			$table->string('serialNo', 50)->comment('シリアル');
			$table->string('makeCode', 50)->comment('製造コード');
			$table->string('assy', 50)->comment('親形式');
			$table->integer('row')->comment('表示順');
			$table->string('class', 50)->nullable()->comment('区分');
			$table->string('checkVal', 200)->nullable()->comment('確認値');
			$table->integer('checkRow')->default(1)->comment('確認時表示行数');
			$table->string('line', 50)->nullable()->comment('作業ライン');
			$table->string('checkRule', 50)->nullable()->comment('確認方法');
			$table->integer('e_num')->default(0)->comment('使用工具数');
			$table->string('status', 50)->default('未着手');
			$table->string('chk_user', 50)->comment('確認者');
			$table->date('chk_date')->nullable()->comment('確認日時');
			$table->string('chk_pc', 50)->comment('確認PC');
			$table->string('memo', 50);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('productionListTbl');
	}

}
