<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link href="path/to/node_modules/normalize.css/normalize.css" rel="stylesheet" />
        <!-- blueprint-icons.css file must be included alongside blueprint.css! -->
        <link href="path/to/node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css" rel="stylesheet" />
        <link href="path/to/node_modules/@blueprintjs/core/lib/css/blueprint.css" rel="stylesheet" />
        <!-- add other blueprint-*.css files here -->

        <!-- Styles -->
        <link href="/css/app.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div id='root'></div>
        <script src='/js/app.js'></script>
    </body>
</html>
