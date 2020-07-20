<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStandTypeItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stand_type_items', function (Blueprint $table) {
            $table->id();
            $table->integer('stand_type_id');
            $table->float('left');
            $table->float('top');
            $table->float('width');
            $table->float('height');
            $table->enum('type',['image','video','logo','billboards','other']);
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
        Schema::dropIfExists('stand_type_items');
    }
}
