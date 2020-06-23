var app = require('express')();

app.post('/', function(req, res) {
  res.redirect(307, 'http://google.com');
});

app.get('/', function(req, res) {
  res.redirect(307, 'http://yandex.ru');
});
