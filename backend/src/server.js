const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://aircnc_app_user:aircnc_app_password@aircnc-dev-e0wc6.mongodb.net/aircnc_db?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// JSON parser
app.use(express.json());
app.use(routes);

app.listen(3333);
