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
            'name' => 'Traffigaze Admin',
            'email' => 'admin@traffigaze.com',
            'password' => bcrypt('traffigaze'),
            'mobile' => '09123456789',
            'avatar' => 'admin.png',
            'is_admin' => 1,
            'is_active' => 1,
            'created_at' => now(),
            'updated_at' => now(),
            'email_verified_at' => now(),
        ]);

        $this->call(TagsTableSeeder::class);
        $this->call(LocationBarangaysTableSeeder::class);
    }
}
