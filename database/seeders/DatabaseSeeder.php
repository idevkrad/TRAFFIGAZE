<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('users')->insert([
            'username' => 'administrator',
            'email' => 'admin@dost.com',
            'password' => bcrypt('dost9ict'),
            'role' => 'Super Administrator',
            'is_active' => 1,
            'created_at' => now(),
            'updated_at' => now(),
            'email_verified_at' => now(),
        ]);

        \DB::table('user_profiles')->insert([
            'firstname' => 'Ra-ouf',
            'lastname' => 'Jumli',
            'middlename' => 'Indanan',
            'gender' => 'Male',
            'birthday' => '1994-03-11',
            'user_id' => 1,
            'mobile' => '09557650801',
            'address' => 'n/a',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
