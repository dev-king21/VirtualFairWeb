<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFairsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fairs', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->integer("opened_year");
            $table->date("start_date");
            $table->date("end_date");
            $table->integer("status"); // 0 - preserved, 1 - current, 2 - ended  
            
            // $table->time("start_time")->nullable();
            // $table->time("end_time")->nullable();
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
        Schema::dropIfExists('fairs');
    }
}
