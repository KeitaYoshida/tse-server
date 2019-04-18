<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateMessageBoxTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('messageBox', function(Blueprint $table)
		{
			$table->integer('index', true)->comment('インデックス');
			$table->timestamp('inTime')->default(DB::raw('CURRENT_TIMESTAMP'))->comment('インサートデート');
			$table->string('name', 50)->comment('登録者');
			$table->string('class', 20)->comment('区分');
			$table->string('star', 10)->nullable()->comment('スターフラグ');
			$table->string('return', 20)->nullable()->comment('返答フラグ');
			$table->string('message', 72)->nullable()->comment('メッセージ');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('messageBox');
	}

}
