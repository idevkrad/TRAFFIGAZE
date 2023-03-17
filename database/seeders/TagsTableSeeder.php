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
            1 => 
            array (
                'id' => 2,
                'name' => 'Road Block',
                'icon' => 'roadBlocked.png',
                'created_at' => '2023-02-19 10:55:26',
                'updated_at' => '2023-02-19 10:55:26',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Flooded Road',
                'icon' => 'floodedRoad.png',
                'created_at' => '2023-02-19 10:55:26',
                'updated_at' => '2023-02-19 10:55:26',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Road Accident',
                'icon' => 'roadAccident.png',
                'created_at' => '2023-02-19 10:55:26',
                'updated_at' => '2023-02-19 10:55:26',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'One Way',
                'icon' => 'oneWay.png',
                'created_at' => '2023-02-19 10:55:26',
                'updated_at' => '2023-02-19 10:55:26',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Dangerous Road',
                'icon' => 'dangerousRoad.png',
                'created_at' => '2023-02-19 10:55:26',
                'updated_at' => '2023-02-19 10:55:26',
            ),
        ));
        
        
    }
}