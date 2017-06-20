var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(request, response) {
    response.render('home', {
        title: "Home",
        headline: "Every City has a diffrent story"
    });
});

app.get('/:city', function(request, response) {
    var cityName = request.params.city;
    var title, heading;
    var imageCount = 4;

    if (cityName === 'Berlin') {
        title = "Berlin";
        heading = "Where Love is in the air";
    } else if (cityName === 'Paris') {
        title = "Paris";
        heading = "Be romanticized here";
    } else if (cityName === 'Madrid') {
        title = "Madrid";
        heading = "Football is everything, here";
    } else if (cityName === 'London') {
        title = "London";
        heading = "Big Ben is looking at you";
    } else if (cityName === 'Newyork') {
        title = "Newyork";
        heading = "Where Magic happens";
    }
    response.render('city', {
        title: title,
        city: cityName,
        numberofimages: imageCount
    });
});

var port = process.env.PORT || 8080;

var server = app.listen(port, function(req, res) {
    console.log('Server started at port ' + port);
});
app.use(express.static(__dirname + '/public'));