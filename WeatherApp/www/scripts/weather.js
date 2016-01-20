function getWeather() {

    var zipcode = $('#input-box').val();
    var queryString =
        "https://query.yahooapis.com/v1/public/yql?q=" +
        "select+*+from+weather.forecast+where+location=" +
         zipcode + "&format=json";

    $.getJSON(queryString, function (results) {
        if (results.query.count > 0) {
            var weather = results.query.results.channel;

            $('#description').text(weather.description);
            console.log(weather.description);

            var wind = weather.wind;
            $('#temp').text(wind.chill);
            $('#wind').text(wind.speed);

            var atmosphere = weather.atmosphere;
            $('#humidity').text(atmosphere.humidity);
            $('#visibility').text(atmosphere.visibility);

            var astronomy = weather.astronomy;
            $('#sunrise').text(astronomy.sunrise);
            $('#sunset').text(astronomy.sunset);
        }

    });
}