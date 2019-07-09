module.exports = {

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://zrhfiidejnfnte:e6c7d371116514c4a23c6933baf09bca3376c7872b359e024b2695eca7af1550@ec2-174-129-227-205.compute-1.amazonaws.com:5432/d7bduu9087gn0m'

  },

  development: {
    client: 'pg', // says that we want to use knex with postgresql
    connection: process.env.DATABASE_URL ||'postgres://localhost/rocket'
  },
  
}

