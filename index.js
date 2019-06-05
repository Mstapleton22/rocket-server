const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors')
const environment = process.env.NODE_ENV || 'development'
const knexConfig = require('./knexfile.js')[environment]
const knex = require('knex')(knexConfig)

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  knex('methods')
    .then((rows) => {
      console.log(rows)
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})