module.exports = {

  development: {
    client: 'pg', // says that we want to use knex with postgresql
    connection: 'postgres://localhost/rocket'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://hgcgywjzfcewrf:02e870dd4548f79529d521b501313f1742d1a35b242c76a3e66e51bcec07ed06@ec2-23-23-184-76.compute-1.amazonaws.com:5432/db89njvkp05rvd'
  },
 
}

