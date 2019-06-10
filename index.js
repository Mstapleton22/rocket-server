const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors')
const environment = process.env.NODE_ENV || 'development'
const knexConfig = require('./knexfile.js')[environment]
const knex = require('knex')(knexConfig)
const bodyParser = require('body-parser')
require('dotenv').config() 
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  knex('carousel')
    .then((rows) => {
      console.log(rows)
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})
app.get('/contact', (req, res) => {
  knex('contact')
    .then((rows) => {
      console.log(rows)
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})
app.get('/accreditation', (req, res) => {
  knex('accreditation')
    .then((rows) => {
      console.log(rows)
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})
app.get('/parentHandbook', (req, res) => {
  knex('parentHandbook')
    .then((rows) => {
      console.log(rows)
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})
app.get('/programs', (req, res) => {
  knex('programs')
    .then((rows) => {
      console.log(rows)
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})
app.get('/staff', (req, res) => {
  knex('staff')
    .then((rows) => {
      console.log(rows)
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})
app.get('/tuition', (req, res) => {
  knex('tuition')
    .then((rows) => {
      console.log(rows)
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})




app.use((req, res, next) => {
  res.status(404).send("404, path not found.")
})

app.use((req, res, next) => {
  res.status(500).send("500, server error.")
})

app.listen(port, () => console.log(`app listening on port ${port}!`))