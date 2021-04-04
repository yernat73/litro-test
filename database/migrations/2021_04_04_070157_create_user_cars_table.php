<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_cars', function (Blueprint $table) {
            $table->id();
            $table->integer('year');
            $table->string('number');
            $table->string('vin')->nullable();

            $table->bigInteger('car_brand_id')->unsigned();
            $table->bigInteger('car_mode_id')->unsigned();

            $table->foreign('car_brand_id')->references('id')->on('car_brands')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('car_mode_id')->references('id')->on('car_modes')->onDelete('cascade')->onUpdate('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_cars');
    }
}
