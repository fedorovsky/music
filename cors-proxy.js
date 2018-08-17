let express = require('express'),
  request = require('request'),
  bodyParser = require('body-parser'),
  app = express();

const myLimit = typeof (process.argv[2]) !== 'undefined' ? process.argv[2] : '100kb';
console.log('Using limit: ', myLimit);

app.use(bodyParser.json({ limit: myLimit }));

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
  res.header('Access-Control-Allow-Headers', req.header('access-control-request-headers'));

  if (req.method === 'OPTIONS') {
    res.send();
  } else {
    const targetURL = req.header('Target-URL');
    if (!targetURL) {
      res.send(500, { error: 'There is no Target-Endpoint header in the request' });
      return;
    }
    console.log('REQUEST', targetURL + req.url);
    request({ url: targetURL + req.url, method: req.method, json: req.body },
      (error, response, body) => {
        if (error) {
          console.error(`error: ${response.statusCode}`);
        }
        console.log(body);
      }).pipe(res);
  }
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`Proxy server -> localhost:${app.get('port')}`);
});
