$(document).ready(function () {

    $("#city").keyup(function(e) {

        e.preventDefault();

        var nameCity = $(this).val();

        if (nameCity.length > 2) {
            var data = {
                '_method': 'POST',
                "nameCity": nameCity
            };

            $.ajax({
                url: '/api/city',
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
// Processed city [city name] | [weather today] - [weather tomorrow]
});