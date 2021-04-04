<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarModesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('car_modes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->bigInteger('car_brand_id')->unsigned();
            $table->timestamps();

            $table->foreign('car_brand_id')->references('id')->on('car_brands')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('car_modes');
    }
}
