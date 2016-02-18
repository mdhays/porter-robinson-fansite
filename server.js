'use strict';

const app = require('express')();
const _ = require('lodash');

app.set('view engine', 'jade');

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});