let express = require('express');
let app = express();
const cors = require('cors');
app.use(cors());
app.options('*', cors());

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(bodyParser.raw());


let port = process.env.PORT || 3000;

app.listen(port);

let router = require('./api/routes/loginRoute.js');

router(app);


app.get('/', function (req, res) {
  res.send('hello world');
})

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
})



console.log('RESTful API server started on: ' + port);