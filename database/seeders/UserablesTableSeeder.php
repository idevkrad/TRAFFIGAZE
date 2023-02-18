<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserablesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('userables')->delete();
        
        \DB::table('userables')->insert(array (
            0 => 
            array (
                'id' => 1,
                'user_id' => 90,
                'userable_id' => 6,
                'userable_type' => 'App\\Models\\ListRole',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'user_id' => 30,
                'userable_id' => 5,
                'userable_type' => 'App\\Models\\ListRole',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'user_id' => 30,
                'userable_id' => 9,
                'userable_type' => 'App\\Models\\ListGroup',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'user_id' => 66,
                'userable_id' => 8,
                'userable_type' => 'App\\Models\\ListGroup',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            4 => 
            array (
                'id' => 5,
                'user_id' => 94,
                'userable_id' => 10,
                'userable_type' => 'App\\Models\\ListGroup',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            5 => 
            array (
                'id' => 6,
                'user_id' => 63,
                'userable_id' => 8,
                'userable_type' => 'App\\Models\\ListGroup',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}