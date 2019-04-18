<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProcessCheckDataMstTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('processCheckDataMst', function(Blueprint $table)
		{
			$table->integer('index', true)->comment('インデックス');
			$table->integer('p_index')->default(0)->comment('親インデックス');
			$table->integer('row')->default(0)->comment('表示行数');
			$table->string('chk_no', 10)->comment('検査成績書番号');
			$table->string('chk_title', 100)->comment('検査項目');
			$table->string('chk_val', 200)->comment('規格');
			$table->string('chk_rule', 100)->nullable()->comment('確認方法・機器');
			$table->string('chk_method', 100)->nullable()->comment('チェック方法');
			$table->string('chk_tar_A', 100)->nullable()->comment('確認値A');
			$table->string('chk_tar_B', 100)->nullable()->comment('確認値B');
			$table->string('before_flg', 50)->nullable()->comment('前回データ');
			$table->string('val_ea', 50)->nullable()->comment('単位');
			$table->boolean('conf_view_flg', 1)->nullable()->default('b\'0\'')->comment('検査成績書表示フラグ');
			$table->string('conf_view_title', 1000)->nullable()->comment('成績書検査項目');
			$table->string('conf_view_val', 1000)->nullable()->comment('成績書規格');
			$table->integer('conf_view_row')->comment('成績書表示行数');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('processCheckDataMst');
	}

}
