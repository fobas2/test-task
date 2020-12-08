<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="{{ asset("css/app.css") }}" rel="stylesheet">
        <link href="{{ asset("css/main.css") }}" rel="stylesheet">
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <form action="#">

                        <div class="form-group">
                            <label for="city">City: </label>
                            <input type="text" id="city" placeholder="Input City">
                        </div>
                    </form>
                </div>
                <div class="col-8">
                    <div class="weather-result">
                    </div>
                </div>
                <div class="col-12">
                    <button id="all-city">Show All Cities Weather</button>
                    <div class="city-weater">

                    </div>
                </div>
            </div>
        </div>

        <script src="{{ asset("js/jquery-3.5.1.js") }}"></script>
        <script src="{{ asset("js/main.js") }}"></script>
    </body>
    {{--<script>
        function activatePlacesSearch() {
            var input = document.getElementById('city');
            var autocomplete = new google.maps.places.Autocomplete(input);
        }
    </script>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBsy4o-3mFrqteqviYhBACKviuvpoo468o&libraries=places&callback=activatePlacesSearch"></script>--}}
</html>
