var express  = require('express');

// environment variables can be set in fig.yml

var PORT = process.env.PORT || 80;

var app = express();

// configure ejs for templating

app.engine('html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

// set public directory to serve assets (css, js, images, etc)
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

listen();

function listen() {
  var server = app.listen(PORT, function() {
    console.log('Server listening on port ' + server.address().port);
  });
}
