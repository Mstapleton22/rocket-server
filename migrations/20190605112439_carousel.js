exports.up = function (knex, Promise) {
  return knex.schema.createTable('carousel', table => {
    table.primary('id').notNullable().defaultsTo(0)
    table.string('image').notNullable().defaultsTo('')
    table.string('quote').notNullable().defaultsTo('')
    table.string('quoter').notNullable().defaultsTo('')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('carousel')
};
