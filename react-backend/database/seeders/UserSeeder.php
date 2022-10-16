<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create(['name'=>'aanchal', 'email'=>'aanchal@gmail.com','password'=>bcrypt('1234567890'),'confirm_password'=>bcrypt('1234567890'),'address'=>'bkt','phoneno'=>'55056678']);
    }
}
