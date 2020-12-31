let express = require('express');
let app = express();
const cors = require('cors');
app.use(cors());
app.options('*', cors());


let port = process.env.PORT || 3000;

app.listen(port);

let router = require('./api/routes/loginRoute.js');

router(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
})

app.get('/', function (req, res) {
  res.send('hello world');
})

console.log('RESTful API server started on: ' + port);