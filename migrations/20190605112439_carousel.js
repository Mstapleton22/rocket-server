exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('carousel', table => {
      table.integer('id').primary().notNullable().defaultsTo(0)
      table.string('image_name').notNullable().defaultsTo('')
      table.string('image_url').notNullable().defaultsTo('')
      table.string('quote').notNullable().defaultsTo('')
      table.string('quoter').notNullable().defaultsTo('')
    }),
    knex.schema.createTable('contact', table => {
      table.integer('id').primary().notNullable().defaultsTo(0)
      table.string('hours').notNullable().defaultsTo('')
      table.string('address').notNullable().defaultsTo('')
      table.string('phone').notNullable().defaultsTo('')
      table.string('email').notNullable().defaultsTo('')
    }),
    knex.schema.createTable('accreditation', table => {
      table.integer('id').primary().notNullable().defaultsTo(0)
      table.string('name').notNullable().defaultsTo('')
      table.string('image_name').notNullable().defaultsTo('')
      table.string('image_url').notNullable().defaultsTo('')
    }),
    knex.schema.createTable('tuition', table => {
      table.increments('id').unsigned().primary()
      table.string('name').notNullable().defaultsTo('')
      table.string('image_name').notNullable().defaultsTo('')
      table.string('image_url').notNullable().defaultsTo('')
    }),
    knex.schema.createTable('parentHandbook', table => {
      table.integer('id').primary().notNullable().defaultsTo(0)
      table.string('name').notNullable().defaultsTo('')
      table.string('url').notNullable().defaultsTo('')
    }),
    knex.schema.createTable('programs', table => {
      table.increments('id').unsigned().primary()
      table.string('image_name').notNullable().defaultsTo('')
      table.string('image_url').notNullable().defaultsTo('')
      table.string('name').notNullable().defaultsTo('')
      table.text('body').notNullable().defaultsTo('')
    }),
    knex.schema.createTable('staff', table => {
      table.increments('id').unsigned().primary()
      table.string('name').notNullable().defaultsTo('')
      table.string('image_name').notNullable().defaultsTo('')
      table.string('image_url').notNullable().defaultsTo('')
      table.text('bio').notNullable().defaultsTo('')
    }),

    knex.schema.createTable('mission_vision', table => {
      table.integer('id').unsigned().primary()
      table.string('name').notNullable().defaultsTo('')
      table.string('body',1000).notNullable().defaultsTo('')
    })
  ])
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('carousel'),
    knex.schema.dropTable('contact'),
    knex.schema.dropTable('accreditation'),
    knex.schema.dropTable('tuition'),
    knex.schema.dropTable('parentHandbook'),
    knex.schema.dropTable('programs'),
    knex.schema.dropTable('staff'),
    knex.schema.dropTable('mission_vision')
  ])
};
