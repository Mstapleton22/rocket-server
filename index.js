require('dotenv').config() 
const express = require('express')
const app = express()
const port = process.env.PORT || 3003
const cors = require('cors')
const environment = process.env.NODE_ENV || 'development'
const knexConfig = require('./knexfile.js')[environment]
const knex = require('knex')(knexConfig)
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cors())

const sign_s3 = require('./controllers/sign_s3');

app.use('/sign_s3', sign_s3.sign_s3);

app.put('/programs/:id', (req, res, next) => {
  knex('programs').update(req.body).where('id', req.params.id).returning('*')
  .then((rows) => {
    res.send(200)
  })
  .catch((err) => {
    next(err)
  })
})


app.put('/staff/:id', (req, res, next) => {
  knex('staff').update(req.body).where('id', req.params.id).returning('*')
  .then((rows) => {
    res.send(200)
  })
  .catch((err) => {
    next(err)
  })
})

app.put('/carousel/:id', (req, res, next) => {
  knex('carousel').update(req.body).where('id', req.params.id).returning('*')
  .then((rows) => {
    res.send(200)
  })
  .catch((err) => {
    next(err)
  })
})

app.put('/contact/', (req, res, next) => {
  knex('contact').update(req.body).where('id', 1).returning('*')
  .then((rows) => {
    res.send(200)
  })
  .catch((err) => {
    next(err)
  })
})

app.put('/accreditation/:id', (req, res, next) => {
  knex('accreditation').update(req.body).where('id', req.params.id).returning('*')
  .then((rows) => {
    res.send(200)
  })
  .catch((err) => {
    next(err)
  })
})

app.put('/parentHandbook/', (req, res, next) => {
  knex('parentHandbook').update(req.body).where('id', 1).returning('*')
  .then((rows) => {
    res.send(200)
  })
  .catch((err) => {
    next(err)
  })
})

app.get('/carousel', (req, res) => {
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
    
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})

app.get('/programs', (req, res) => {
  knex('programs')
    .then((rows) => {
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

app.listen(port);
console.log('Server up and running...');

