const express = require('express');
const path = require('path');
const app = express();
const port = 3127;
const { freeAgents } = require(`./model.js`)

const axios = require('axios');

app.use(express.static(path.join(__dirname, '../public')));

app.get('/init', (req, res) => {
  freeAgents((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
