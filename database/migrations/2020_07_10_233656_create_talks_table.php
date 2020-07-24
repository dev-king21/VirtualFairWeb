<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTalksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('talks', function (Blueprint $table) {
            $table->id();
            $table->integer("room_id");
            $table->integer("user_id");
            $table->integer("status");
            $table->string("title");


            $table->boolean('limited')->default(true);
            $table->integer('peoples')->nullable();

            $table->string('exhibitor_profession');
            $table->string('exhibitor_company');

            $table->datetime("start_time");
            $table->datetime("end_time");

            $table->date("talk_date");
            $table->string("video")->nullable();
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
        Schema::dropIfExists('talks');
    }
}
