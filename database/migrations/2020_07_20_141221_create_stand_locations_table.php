<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStandLocationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stand_locations', function (Blueprint $table) {
            $table->id();
            $table->integer('fair_type_id');
            $table->integer('stand_type_id');
            $table->double('left', 10, 6);
            $table->double('top', 10, 6);
            $table->double('width', 10, 6);
            $table->double('height', 10, 6);
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
        Schema::dropIfExists('stand_locations');
    }
}
