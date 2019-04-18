<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateEquipMstTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('equipMst', function(Blueprint $table)
		{
			$table->integer('index', true);
			$table->char('equipCode', 8)->unique('equipCode')->comment('工具管理番号');
			$table->string('useArea', 50)->nullable()->comment('工具使用ライン');
			$table->boolean('useFlg')->nullable()->comment('使用フラグ');
			$table->string('class', 50)->comment('規格');
			$table->string('className', 50)->nullable()->comment('工具種別');
			$table->integer('classCode')->default(0)->comment('種別コード（廃止予定）');
			$table->string('name', 100)->nullable()->comment('表示名');
			$table->string('comp', 100)->nullable()->comment('メーカー');
			$table->string('mt_sensor_class', 100)->nullable()->comment('センサ種別');
			$table->string('mt_bk', 100)->nullable()->comment('BK');
			$table->string('mt_capacity', 100)->nullable()->comment('センサ分解能力');
			$table->string('mt_max_val', 100)->nullable()->comment('モータ極数');
			$table->string('mt_roop_val', 100)->nullable()->comment('定格回転速度');
			$table->string('mt_dc', 100)->nullable()->comment('電源電圧');
			$table->string('mt_power', 100)->nullable()->comment('出力（W)');
			$table->string('mt_set_arms', 100)->nullable()->comment('定格電流Arms');
			$table->string('mt_max_arms', 100)->nullable()->comment('最大電流Arms');
			$table->string('mt_use_model', 100)->nullable()->comment('使用代表形式');
			$table->string('usingArea', 100)->default('-')->comment('使用・未使用');
			$table->integer('userId')->default(0)->comment('使用者コード');
			$table->string('defVal', 30)->nullable()->comment('確認値');
			$table->boolean('checkNum')->default(0)->comment('工具チェックコード');
			$table->string('storageAreaUser', 50)->nullable()->comment('管理場所');
			$table->string('equipModel', 50)->nullable()->comment('工具形式');
			$table->string('equipSN', 50)->nullable()->comment('工具シリアル');
			$table->string('chkNo', 50)->nullable()->comment('校正ナンバー');
			$table->string('chkMstDay', 50)->default('0:1年間')->comment('点検期間 0:1年,1:半年,2:使用時点検');
			$table->date('stDay')->nullable()->comment('使用開始日');
			$table->date('chkDay')->nullable()->comment('点検日');
			$table->date('chkDayNext')->nullable()->comment('次回点検日');
			$table->string('remarks', 200)->nullable()->comment('備考');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('equipMst');
	}

}
