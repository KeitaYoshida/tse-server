<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <script src="/js/jquery-3.4.1.min.js"></script>
  <script type="text/javascript" src="/js/jquery.qrcode.min.js"></script>
  <title>torks web</title>

  <!-- Styles -->
  <link rel="stylesheet" href="{{ mix('css/app.css') }}">
  <style>
    html,
    body {
      background-color: #fff;
      color: #636b6f;
      font-family: 'Nunito', sans-serif;
      height: 100vh;
      margin: 0;
    }
  </style>
</head>

<body>
  <div id="app">
    <tse-header logout="{{ route('logout') }}"></tse-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
  <script src=" {{ mix('js/app.js') }} "></script>
</body>

</html>