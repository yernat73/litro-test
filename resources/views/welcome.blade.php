<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Litro</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.gstatic.com"> 
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
        <link href="{{ mix('/css/app.css') }}" rel="stylesheet"> 
        <link href="{{ mix('/scss/app.css') }}" rel="stylesheet">   
    </head>
    <body class="w-screen min-h-screen bg-violet-900 flex flex-col font-sans text-white tracking-wide">
        <div id="app">
        </div>
        


        
        <script src="{{ mix('/js/app.js') }}"></script>

    </body>
</html>
