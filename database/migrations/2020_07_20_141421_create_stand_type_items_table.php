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
            $table->double('left', 10, 6);
            $table->double('top', 10, 6);
            $table->double('width', 10, 6);
            $table->double('height', 10, 6);
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
