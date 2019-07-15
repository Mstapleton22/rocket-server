
exports.seed = function (knex, Promise) {
  return knex('contact').del()
    .then(function () {
      return knex('contact').insert([
        { id: 1, hours: '7 a.m - 6 p.m daily', address: '5000 East Alameda Avenue, Denver, Colorado 80249', phone: '(303) 338-7012', email: 'aelcdenver@gmail.com' },
      ]);
    });
};
