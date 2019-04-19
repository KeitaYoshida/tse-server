<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table('users')->insert(
      [
        [
          'name' => 'keita yoshidas',
          'loginid' => 'keita0503',
          'password' => Hash::make('password'),
        ]
      ]
    );

    factory(App\User::class, 100)->create();
  }
}
