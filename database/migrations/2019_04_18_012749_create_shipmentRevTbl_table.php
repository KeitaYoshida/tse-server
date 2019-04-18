<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateShipmentRevTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('shipmentRevTbl', function(Blueprint $table)
		{
			$table->integer('Index', true);
			$table->string('orderCode', 16)->nullable()->comment('注文書明細No');
			$table->integer('orderCodeRow')->nullable()->comment('注文書明細No（行）');
			$table->boolean('status')->default(0)->comment('状態');
			$table->string('packFlg', 20)->nullable()->comment('梱包フラグ');
			$table->date('revDay')->comment('納入予定日');
			$table->date('revMonth')->comment('納入予定月');
			$table->integer('revNum')->default(0)->comment('納入予定数');
			$table->integer('revBoxNum')->nullable()->comment('箱数');
			$table->integer('boxInNum')->nullable()->comment('入り数');
			$table->integer('shipmentTo')->nullable()->comment('納品予定場所');
			$table->integer('snSt')->default(0)->comment('シリアル開始値');
			$table->integer('snEd')->default(0)->comment('シリアル終わり値');
			$table->integer('lastNum')->default(0)->comment('分納数');
			$table->string('memo', 100)->nullable()->comment('備考');
			$table->string('codeOrder', 50)->nullable()->comment('受注No');
			$table->integer('codeOrderRow')->nullable()->comment('受注No行');
			$table->string('model', 50)->comment('形式');
			$table->string('modelName', 50)->nullable()->comment('品名');
			$table->string('const', 50)->comment('工事番号');
			$table->string('constParent', 50)->comment('親工事番号');
			$table->string('codeConst', 50)->comment('工事番号-出荷');
			$table->integer('codeConstRow')->nullable()->comment('工事番号（行）');
			$table->integer('onePrice')->comment('工事単価');
			$table->integer('firstClass')->nullable()->comment('初回区分');
			$table->integer('areaClass')->nullable()->comment('出荷先');
			$table->string('customer', 50)->nullable()->comment('客先');
			$table->integer('customerOrder')->nullable()->comment('客先要求');
			$table->integer('orderNo')->nullable()->comment('手配No');
			$table->timestamp('upDate')->default(DB::raw('CURRENT_TIMESTAMP'))->comment('更新日');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('shipmentRevTbl');
	}

}
