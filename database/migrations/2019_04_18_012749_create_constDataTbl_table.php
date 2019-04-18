<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateConstDataTblTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('constDataTbl', function(Blueprint $table)
		{
			$table->string('const', 30)->primary()->comment('工事番号 元番');
			$table->string('constKanri', 100)->nullable()->comment('工事管理番号');
			$table->string('constParent', 30)->nullable()->comment('親工事');
			$table->string('constAnyVal', 50)->nullable()->comment('手入力工事番号');
			$table->string('orderCode', 20)->nullable()->comment('注文書明細番号');
			$table->string('orderRCode', 20)->nullable()->comment('発注予定番号');
			$table->integer('constPrice')->default(0);
			$table->string('constOne', 20)->nullable()->comment('工事番号 年数二桁');
			$table->string('constTwo', 20)->nullable()->comment('工事番号 年数一桁');
			$table->string('model', 20)->comment('形式');
			$table->string('modelRp', 20)->comment('運用形式');
			$table->string('itemCode', 20)->nullable()->comment('品目コード（形式）');
			$table->string('constClass', 10)->nullable()->comment('受注区分');
			$table->boolean('orderFlg')->default(0)->comment('手配フラグ');
			$table->date('orderStDay')->nullable()->comment('発注日');
			$table->date('orderDay')->nullable()->comment('納入予定日');
			$table->string('workMonth', 20)->nullable()->comment('作業月');
			$table->date('workStDay')->nullable()->comment('作業開始日');
			$table->date('workEdDay')->nullable()->comment('作業完了日');
			$table->boolean('workFlg')->default(0)->comment('0:待機中, 1:進行中, 2:検査待ち, 3:出荷待ち');
			$table->date('shipment')->nullable()->comment('出荷完了日');
			$table->integer('shipNum')->default(0)->comment('出荷済み数');
			$table->integer('toShipNum')->default(0)->comment('出荷待ち数');
			$table->integer('toCheckNum')->default(0)->comment('検査待ち数');
			$table->integer('topSN')->default(0)->comment('先頭シリアルナンバー');
			$table->string('shipSN', 50)->nullable()->comment('出荷シリアル');
			$table->integer('totalProcessNum')->comment('総工程数');
			$table->integer('endProcessNum')->comment('完了工程数');
			$table->integer('unitNum')->comment('工事台数');
			$table->integer('unitPrice')->nullable()->comment('1台単価');
			$table->integer('totalNum')->default(0);
			$table->integer('errorNum')->default(0);
			$table->string('erInfo', 200)->nullable();
			$table->string('remarks', 200)->nullable();
			$table->date('insertDay')->nullable();
			$table->dateTime('checkDate')->comment('マージン確認日');
			$table->dateTime('updatedAt');
			$table->dateTime('createdAt');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('constDataTbl');
	}

}
