<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->

    <title>Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template</title>
    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset(mix('app/css/main.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('app/css/iconfont.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('app/css/material-icons/material-icons.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('app/css/vuesax.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('app/css/prism-tomorrow.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('app/css/app.css')) }}">

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ asset('app/images/logo/favicon.png') }}">
  </head>
  <body>
    <div id="app">
    </div>
    <script src="{{ asset(mix('app/js/app.js')) }}"></script>
    <!-- <script src="https://js.stripe.com/v3/"></script> -->
    <script src="https://www.paypal.com/sdk/js?client-id=ATijwtGLo7ySldj1ufH-wZiP1TEOiFMv86XwvHZxdNEmFj_WJu0GEkvYR1IrRJLAoNP5E_GfGDVMIdqh&currency=EUR"></script>
  </body>
</html>
