<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCheckdataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('checkdata', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('workday', 64);
            $table->string('workcode', 64);
            $table->string('workuser', 64);
            $table->integer('workindex')->nullable();
            $table->string('constcode', 64)->nullable();
            $table->string('serialno', 64)->nullable();
            $table->string('colcode', 64);
            $table->string('checkval', 256);
            $table->timestamps();
            $table->index(['workcode', 'workday'], 'not-const-check');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('checkdata');
    }
}
