require('dotenv').config() 
const express = require('express')
const app = express()
const port = process.env.PORT ||  5000;
const cors = require('cors')
const environment = process.env.NODE_ENV || 'development'
const knexConfig = require('./knexfile.js')[environment]
const knex = require('knex')(knexConfig)
const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({extend:true}));

app.use(bodyParser.json())
app.use(cors())

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header('Access-Control-Allow-Methods', 'PATCH, PUT, POST, GET, DELETE, OPTIONS');
//      next();
// });

// const mailer = require("./controllers/mailer");
const newmailer = require('./controllers/newmailer')
const sign_s3 = require('./controllers/sign_s3');

app.use('/sign_s3', sign_s3.sign_s3);

app.post('/api/contact', (req, res, next) => {
  return newmailer.sendMailOne('aelcdenver@gmail.com', ['aelcdenver@gmail.com'], req.body)
    .then(() => res.send(req.body))
    .catch(next);
});

app.post('/programs', (req, res, next) => {
  knex('programs').insert(req.body)
  .then((rows) => {
    res.send(200)
  })
  .catch((err) => {
    next(err)
  })
})

app.post('/staff', (req, res, next) => {
  knex('staff').insert(req.body)
  .then((rows) => {
    res.send(200)
  })
  .catch((err) => {
    next(err)
  })
})

app.post('/carousel', (req, res, next) => {
  knex('carousel').insert(req.body)
  .then((rows) => {
    res.send(200) 
  })
  .catch((err) => {
    next(err)
  })
})

app.patch('/missionAndvision/:id', (req, res, next) => {
  knex('mission_vision').update(req.body).where('id', req.params.id).returning('*')
  .then((rows) => {
    res.send(200)
  })
  .catch((err) => {
    next(err)
  })
})

app.patch('/programs/:id', (req, res, next) => {
  knex('programs').update(req.body).where('id', req.params.id).returning('*')
  .then((rows) => {
    res.send(200)
  })
  .catch((err) => {
    next(err)
  })
})

app.patch('/staff/:id', (req, res, next) => {
  knex('staff').update(req.body).where('id', req.params.id).returning('*')
  .then((rows) => {
    // res.send(200)
    res.sendStatus(200)
  })
  .catch((err) => {
    next(err)
  })
})

app.patch('/carousel/:id', (req, res, next) => {
  knex('carousel').update(req.body).where('id', req.params.id).returning('*')
  .then((rows) => {
    res.send(200)
  })
  .catch((err) => {
    next(err)
  })
})

app.patch('/contact/1', (req, res, next) => {
  knex('contact').update(req.body).where('id', 1).returning('*')
  .then((rows) => {
    res.send(200)
  })
  .catch((err) => {
    next(err)
  })
})

app.patch('/accreditation/:id', (req, res, next) => {
  knex('accreditation').update(req.body).where('id', req.params.id).returning('*')
  .then((rows) => {
    res.send(200)
  })
  .catch((err) => {
    next(err)
  })
})

app.patch('/parentHandbook/', (req, res, next) => {
  knex('parentHandbook').update(req.body).where('id', 1).returning('*')
  .then((rows) => {
    res.send(200)
  })
  .catch((err) => {
    next(err)
  })
})

app.get('/', (req, res) => {
  knex('carousel').orderBy('id', 'asc')
    .then((rows) => {
      console.log(rows)
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})

app.get('/carousel', (req, res) => {
  knex('carousel').orderBy('id', 'asc')
    .then((rows) => {
      console.log(rows)
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})

app.get('/contact', (req, res) => {
  knex('contact').orderBy('id', 'asc')
    .then((rows) => {
      console.log(rows)
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})
app.get('/accreditation', (req, res) => {
  knex('accreditation').orderBy('id', 'asc')
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
  knex('programs').orderBy('id', 'asc')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})

app.get('/staff', (req, res) => {
  knex('staff').orderBy('id', 'asc')
    .then((rows) => {
      console.log(rows)
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})
app.get('/tuition', (req, res) => {
  knex('tuition').orderBy('id', 'asc')
    .then((rows) => {
      console.log(rows)
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})

app.get('/missionAndvision', (req, res) => {
  knex('mission_vision').orderBy('id', 'asc')
    .then((rows) => {
      console.log(rows)
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})

app.delete('/programs/:id', (req, res, next) => {
  knex('programs').where({id: req.params.id}).del()
  .then(data => {
      res.status(200).send({
      message: 'Method deleted',
      data: data
    })
  })
    .catch((err)=> {
      next(err)
    })
})

app.delete('/staff/:id', (req, res, next) => {
  knex('staff').where({id: req.params.id}).del()
  .then(data => {
      res.status(200).send({
      message: 'Method deleted',
      data: data
    })
  })
    .catch((err)=> {
      next(err)
    })
})


app.use((req, res, next) => {
  res.status(404).send("404, path not found.")
})

app.use((req, res, next) => {
  res.status(500).send("500, server error.")
})

app.listen(port);
console.log('Server up and running...');

