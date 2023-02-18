<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ListGroupsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('list_groups')->delete();
        
        \DB::table('list_groups')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Regional Standards and Testing Laboratories',
                'acronym' => 'RSTL',
                'type' => 'Sub',
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Gender and Development',
                'acronym' => 'GAD',
                'type' => 'Sub',
                'created_at' => '2021-10-11 09:41:04',
                'updated_at' => '2021-10-11 09:41:04',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'One-stop Laboratory Services for Global Competitiveness',
                'acronym' => 'OneLab',
                'type' => 'Sub',
                'created_at' => '2021-10-11 09:41:14',
                'updated_at' => '2021-10-11 09:41:14',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Science & Technology Information Center',
                'acronym' => 'STIC',
                'type' => 'Sub',
                'created_at' => '2021-10-11 09:41:38',
                'updated_at' => '2021-10-11 10:05:33',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Disaster Risk Reduction and Management',
                'acronym' => 'DRRM',
                'type' => 'Sub',
                'created_at' => '2021-10-11 09:41:38',
                'updated_at' => '2021-10-11 10:05:33',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Science and Technology Scholarships',
                'acronym' => 'S&T Scholarships',
                'type' => 'Sub',
                'created_at' => '2021-10-11 09:41:38',
                'updated_at' => '2021-10-11 10:05:33',
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'Human Resource',
                'acronym' => 'HR',
                'type' => 'Sub',
                'created_at' => '2021-10-11 09:41:38',
                'updated_at' => '2021-10-11 10:05:33',
            ),
            7 => 
            array (
                'id' => 8,
                'name' => 'A',
                'acronym' => 'A',
                'type' => 'Schedule',
                'created_at' => '2022-12-14 16:17:40',
                'updated_at' => '2022-12-14 16:17:40',
            ),
            8 => 
            array (
                'id' => 9,
                'name' => 'B',
                'acronym' => 'B',
                'type' => 'Schedule',
                'created_at' => '2022-12-14 16:18:19',
                'updated_at' => '2022-12-14 16:18:22',
            ),
            9 => 
            array (
                'id' => 10,
                'name' => 'C',
                'acronym' => 'C',
                'type' => 'Schedule',
                'created_at' => '2022-12-14 16:18:26',
                'updated_at' => '2022-12-14 16:18:26',
            ),
        ));
        
        
    }
}