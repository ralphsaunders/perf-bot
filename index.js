var express = require('express'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    mustacheExpress = require('mustache-express'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    res.status(200).render('index', {
        world: 'world!'
    });
});

app.post('/api/timeline/', function(req, res) {
    debugger;

    res.status(200).send(true);
});

var server = app.listen(3000, function() {
    var host = server.address().address,
        port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});
