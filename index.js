const express = require('express');
const c = require('./controller');
const massive = require('massive');

const app = express();

massive({
  host: 'localhost',
  port: 5432,
  database: 'developer',
  user: 'developer',
  password: '',
  ssl: false,
  poolSize: 10
}).then(dbInstance => {
  app.set('db', dbInstance);
});

app.get('/api/data', c.getData);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
