<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SurveysTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('Surveys')->delete();

        \DB::table('surveys')->insert(array (
            0 => 
            array (
                'id' => 1,
                'question' => 'I feel part of the DOST-IX family.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            1 => 
            array (
                'id' => 2,
                'question' => 'I find my work interesting and fulfilling.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            2 => 
            array (
                'id' => 3,
                'question' => 'DOST IX provides plenty of opportunities for personal growth.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            3 => 
            array (
                'id' => 4,
                'question' => 'DOST IX has clearly defined quality goals.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            4 => 
            array (
                'id' => 5,
                'question' => 'Information is openly shared between management and employees.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            5 => 
            array (
                'id' => 6,
                'question' => 'I am compensated fairly.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            6 => 
            array (
                'id' => 7,
                'question' => 'My supervisor gives me enough opportunities to take an active role as a leader.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            7 => 
            array (
                'id' => 8,
                'question' => 'At DOST IX, we are rewarded for our performance and striving to achieve excellence.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            8 => 
            array (
                'id' => 9,
                'question' => 'I have security and stability at my work.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            9 => 
            array (
                'id' => 10,
                'question' => 'People within my unit cooperate with each other rather than compete.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            10 => 
            array (
                'id' => 11,
                'question' => 'My work gives me a feeling of personal accomplishment.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            11 => 
            array (
                'id' => 12,
                'question' => 'DOST IX provides technical training so that I can advance in my career.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            12 => 
            array (
                'id' => 13,
                'question' => 'My work assignment and my role in the organization are specified and adequately explained to me.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            13 => 
            array (
                'id' => 14,
                'question' => 'My supervisor listens to my opinion when making decision that involves my work activities.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            14 => 
            array (
                'id' => 15,
                'question' => 'I am able to plan my vacation and take off the days that I need.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            15 => 
            array (
                'id' => 16,
                'question' => 'I feel comfortable talking to my supervisor whenever there is a problem.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            16 => 
            array (
                'id' => 17,
                'question' => 'My supervisor recognized the extra effort and actions that I do to perform the best at DOST IX.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            17 => 
            array (
                'id' => 18,
                'question' => 'I trust the top management’s integrity and believe what they say.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            18 => 
            array (
                'id' => 19,
                'question' => 'My supervisor encourages teamwork and cooperation to achieve targeted goals.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            19 => 
            array (
                'id' => 20,
                'question' => 'I am proud of being a DOST IX employee.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            20 => 
            array (
                'id' => 21,
                'question' => 'DOST IX facilitates ongoing training to upgrade my skills.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            21 => 
            array (
                'id' => 22,
                'question' => 'Policies and procedures are explained adequately within DOST IX.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            22 => 
            array (
                'id' => 23,
                'question' => 'The management gives all of the information I need to perform my job well.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            23 => 
            array (
                'id' => 24,
                'question' => 'DOST IX provides competitive compensation and benefits packages compared to other offices.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            24 => 
            array (
                'id' => 25,
                'question' => 'My supervisor encourages me to do my best.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            25 => 
            array (
                'id' => 26,
                'question' => 'My supervisor always shows appreciation for every extra effort I put in my work.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
            26 => 
            array (
                'id' => 27,
                'question' => 'I will continue to work for DOST IX in the next 5 years.',
                'type' => 'morale',
                'is_active' => 1,
                'created_at' => '2021-10-11 09:40:53',
                'updated_at' => '2021-10-11 09:40:53',
            ),
        ));
        
        
        
    }
}