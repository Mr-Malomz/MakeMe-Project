<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        {{-- <meta name="viewport" content="width=device-width, initial-scale=1"> --}}
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>MakeMe</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">

        {{-- icons --}}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

        {{-- bootstrap --}}
        {{-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> --}}

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
        <script src="https://kit.fontawesome.com/6010a58a85.js"></script>
    </body>
</html>
