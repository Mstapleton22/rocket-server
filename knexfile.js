module.exports = {

  development: {
    client: 'pg', // says that we want to use knex with postgresql
    connection: 'postgres://localhost/rocket'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || ' postgres://ijqxrandvnsjtq:80e325c0fae2ed0f6a37a864fa5e46bdc5ca5d81368c0d0ecb30d3c9987d702a@ec2-54-83-9-36.compute-1.amazonaws.com:5432/dklgfu4r61725'
  },
 
}

