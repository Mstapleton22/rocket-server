
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('parentHandbook').del()
    .then(function () {
      // Inserts seed entries
      return knex('parentHandbook').insert([
        { id: 1, document: '' },
      ]);
    });
};
