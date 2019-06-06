
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('accreditation').del()
    .then(function () {
      // Inserts seed entries
      return knex('accreditation').insert([
        { id: 1, image1: '' },
        { id: 2, image2: '' },
        { id: 3, image3: '' },
      ]);
    });
};
