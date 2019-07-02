module.exports = {

  development: {
    client: 'pg', // says that we want to use knex with postgresql
    connection: process.env.DATABASE_URL ||'postgres://localhost/rocket'
  },
  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || ' postgres://ivgvhsskzesvzl:49d0b5134fb509479b233b893366ac8301d0afae5f55c4b2ae30fd63ea024dbb@ec2-174-129-226-234.compute-1.amazonaws.com:5432/da75mcjfgs8obv'

  },
 
}

