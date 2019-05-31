<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
  /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

  use AuthenticatesUsers;

  /**
   * Where to redirect users after login.
   *
   * @var string
   */
  protected $redirectTo = '/home';

  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct()
  {
    $this->middleware('guest')->except('logout');
  }

  /**
   * Show the application's login form.
   *
   * @return \Illuminate\Http\Response
   */
  public function showLoginForm()
  {
    // if(isset($_SERVER['HTTP_REFERER']])) {
    session(
      ['url.intended' => isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : NULL]
    ); // この行を追加

    // }
    return view('auth.login');
  }

  /**
   * Get the login username to be used by the controller.
   *
   * @return string
   */
  public function username()
  {
    return 'loginid';
  }
}
