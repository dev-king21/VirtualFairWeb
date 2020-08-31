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

            $table->string('exhibitor_name');
            $table->string('exhibitor_profession');
            $table->string('exhibitor_company');
            $table->string('description');
            $table->string('key');
            $table->string('password');
            $table->time("start_time")->nullable();
            $table->time("end_time")->nullable();

            $table->date("talk_date");
            $table->integer("live")->default(1);
            $table->integer("category_id")->nullable();
            $table->string("background")->nullable();
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
