<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class TagsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('tags')->delete();
        
        \DB::table('tags')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Traffic',
                'icon' => 'traffic.png',
                'created_at' => '2023-02-19 10:55:26',
                'updated_at' => '2023-02-19 10:55:26',
            ),
        ));
        
        
    }
}