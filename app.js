const express = require('express');
const ngrok = require('ngrok');
const routes = require('./routes/monday-routes')
const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, function() {
    console.log('Listening for webhooks on port 3000');
    (async function() { await ngrok.connect(3000); })();
})