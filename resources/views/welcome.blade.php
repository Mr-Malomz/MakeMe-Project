<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>MakeMe</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">

        {{-- icons --}}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    </head>
    <body>
        <div id="example"></div>
        <noscript>
            You need to enable JavaScript to run this app.
        </noscript>
        {{-- @if(env('APP_ENV') === 'local')
            <script src="http://localhost:3000/js/app.js"></script>
        @else
            <script src="{{ asset('js/app.js') }}"></script>
        @endif --}}
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
