$(document).ready(function () {

    $("#all-city").click(function() {
        $.ajax({
            url: 'api/city/all',
            dataType: 'json',
            method: 'GET',
            delay: 350,
            success: function (myData) {
                var cities = JSON.parse(JSON.stringify(myData.data));
                cities.forEach(function (item, i, arr) {
                    //console.log("name: "+cities[i].name+", lat: "+cities[i].latitude+", long: "+cities[i].longitude);
                    var nameCity = cities[i].latitude+","+cities[i].longitude;
                    var data = {
                        '_method': 'POST',
                        "nameCity": nameCity
                    };
                    $.ajax({
                        url: '/api/city/weather',
                        dataType : "json",
                        method: 'POST',
                        data: data,
                        delay: 350,
                        success: function (myData) {
                            var data = JSON.parse(JSON.stringify(myData.data));
                            $(".city-weater").append(
                                '<h3>'+"Processed city "+data.location.name+ " | "+
                                data.forecast.forecastday[0].day.condition.text+" "+'<img src='+data.forecast.forecastday[0].day.condition.icon+'>'+" - "+
                                data.forecast.forecastday[1].day.condition.text+" "+'<img src='+data.forecast.forecastday[1].day.condition.icon+'>'+'</h3>'
                            );
                        }
                    });
                    //console.log( i + ": " + JSON.parse(JSON.stringify(item)) + " (массив:" + arr + ")" );
                })
            }
        });
    });

    $("#city").keyup(function(e) {

        e.preventDefault();

        var nameCity = $(this).val();

        if (nameCity.length > 2) {
            var data = {
                '_method': 'POST',
                "nameCity": nameCity
            };

            $.ajax({
                url: '/api/city/weather',
                dataType : "json",
                method: 'POST',
                data: data,
                delay: 350,
                success: function (myData) {
                    var data = JSON.parse(JSON.stringify(myData.data));
                    $(".weather-result").html(
                        '<h2><b>'+"Processed City - "+data.location.name+' Weather</b></h2>'+
                        '<h3>'+"Today: "+data.forecast.forecastday[0].day.condition.text+" "+'<img src='+data.forecast.forecastday[0].day.condition.icon+'>'+" "+data.forecast.forecastday[0].day.avgtemp_c+'&deg</h3>'+
                        '<h3>'+"Current: "+data.current.condition.text+" "+'<img src='+data.current.condition.icon+'>'+" "+data.current.temp_c+'&deg</h3>'+
                        '<h3>'+"Tomorrow: "+data.forecast.forecastday[1].day.condition.text+" "+'<img src='+data.forecast.forecastday[1].day.condition.icon+'>'+" "+data.forecast.forecastday[1].day.avgtemp_c+'&deg</h3>');
                }
            });
        }

    });

});