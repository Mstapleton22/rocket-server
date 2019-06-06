
exports.seed = function (knex, Promise) {
  return knex('contact').del()
    .then(function () {
      return knex('contact').insert([
        { id: 1, hours: '', address: '', phone: '', email: '' },
      ]);
    });
};
