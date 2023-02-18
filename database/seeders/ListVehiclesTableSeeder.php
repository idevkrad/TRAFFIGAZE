<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ListVehiclesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('list_vehicles')->delete();
        
        \DB::table('list_vehicles')->insert(array (
            0 => 
            array (
                'created_at' => '2022-07-05 14:01:04',
                'group_id' => 8,
                'id' => 1,
                'is_available' => 1,
                'name' => 'Suzuki Alto',
                'plate' => 'SKE-124',
                'type' => 'Hatchback',
                'updated_at' => '2022-07-05 14:01:04',
                'user_id' => 1,
            ),
            1 => 
            array (
                'created_at' => '2022-07-05 14:02:19',
                'group_id' => 8,
                'id' => 2,
                'is_available' => 1,
                'name' => 'Suzuki Alto',
                'plate' => 'SKE-215',
                'type' => 'Hatchback',
                'updated_at' => '2022-07-05 14:02:19',
                'user_id' => 1,
            ),
            2 => 
            array (
                'created_at' => '2022-07-05 14:02:57',
                'group_id' => 8,
                'id' => 3,
                'is_available' => 1,
                'name' => 'Mitsubishi Estrada',
                'plate' => 'SGD-284',
                'type' => 'Pick-up',
                'updated_at' => '2022-07-05 14:02:57',
                'user_id' => 1,
            ),
            3 => 
            array (
                'created_at' => '2022-07-05 14:03:51',
                'group_id' => 8,
                'id' => 4,
                'is_available' => 1,
                'name' => 'Toyota Hilux',
                'plate' => 'SLE-328',
                'type' => 'Pick-up',
                'updated_at' => '2022-07-05 14:03:51',
                'user_id' => 1,
            ),
            4 => 
            array (
                'created_at' => '2022-07-05 14:04:34',
                'group_id' => 8,
                'id' => 5,
                'is_available' => 1,
                'name' => 'Toyota Hilux',
                'plate' => 'On-process',
                'type' => 'Pick-up',
                'updated_at' => '2022-07-05 14:04:34',
                'user_id' => 1,
            ),
            5 => 
            array (
                'created_at' => '2022-07-05 14:05:24',
                'group_id' => 11,
                'id' => 6,
                'is_available' => 1,
                'name' => 'Toyota Innova',
                'plate' => 'SJC-276',
                'type' => 'Wagon',
                'updated_at' => '2022-07-05 14:05:24',
                'user_id' => 1,
            ),
            6 => 
            array (
                'created_at' => '2022-07-05 14:06:15',
                'group_id' => 10,
                'id' => 7,
                'is_available' => 1,
                'name' => 'Hyundai Tucson CRDI 2.0',
                'plate' => 'SLE-276',
                'type' => 'SUV',
                'updated_at' => '2022-07-05 14:06:15',
                'user_id' => 1,
            ),
            7 => 
            array (
                'created_at' => '2022-07-05 14:07:27',
                'group_id' => 9,
                'id' => 8,
                'is_available' => 1,
                'name' => 'Isuzu Hi-Lander Crosswind',
                'plate' => 'SGY-436',
                'type' => 'Wagon',
                'updated_at' => '2022-07-05 14:07:27',
                'user_id' => 1,
            ),
        ));
        
        
    }
}