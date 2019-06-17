
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('tuition').del()
    .then(function () {
      // Inserts seed entries
      return knex('tuition').insert([
        { id: 1, image: '' },
        { id: 2, image: '' },
      ]);
    });
};
