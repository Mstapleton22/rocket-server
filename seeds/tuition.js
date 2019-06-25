
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('tuition').del()
    .then(function () {
      // Inserts seed entries
      return knex('tuition').insert([
        { id: 1, name: '', image_name: '', image_url: '' },
        { id: 2, name: '', image_name: '', image_url: '' },
      ]);
    });
};
