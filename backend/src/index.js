const express = require('express');
const moongoose = require('mongoose')
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server)

moongoose.connect('YOUR_MONGODB_URL', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
