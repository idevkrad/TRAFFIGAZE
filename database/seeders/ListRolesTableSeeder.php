<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ListRolesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        
        \DB::table('list_roles')->delete();
        
        \DB::table('list_roles')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Regional Director',
                'definition' => 'n/a',
                'type' => 'fixed',
                'created_at' => '2021-10-11 10:15:18',
                'updated_at' => '2021-10-11 10:15:18',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Assistant Regional Director',
                'definition' => 'n/a',
                'type' => 'fixed',
                'created_at' => '2021-10-11 10:16:27',
                'updated_at' => '2021-10-11 10:16:27',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Document Staff',
                'definition' => 'n/a',
                'type' => 'staff',
                'created_at' => '2021-10-11 10:16:31',
                'updated_at' => '2021-10-11 10:16:31',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Travel Staff',
                'definition' => 'n/a',
                'type' => 'staff',
                'created_at' => '2021-10-11 10:16:37',
                'updated_at' => '2021-10-11 10:16:37',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'HR Staff',
                'definition' => 'n/a',
                'type' => 'staff',
                'created_at' => '2021-10-11 10:16:37',
                'updated_at' => '2021-10-11 10:16:37',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'HR Head',
                'definition' => 'n/a',
                'type' => 'head',
                'created_at' => '2021-10-11 10:16:37',
                'updated_at' => '2021-10-11 10:16:37',
            ),
        ));
        
    }
}