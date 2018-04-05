var morgan = require('morgan');
var ejs = require('ejs');
const express = require('express');
const app = express();

var port = 3001;

var path = require('path');
var bodyParser = require('body-parser');


app.use(morgan('dev'));

app.set('views',path.join (__dirname, '/dist'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen((process.env.PORT || port), function() {
    console.log("server listening on port" + (process.env.PORT || port));
}); 

app.use('/', express.static('./dist'));

app.route('/*')
  .get((req, res) => {
    res.sendFile('index.html', { root: './dist' });
});