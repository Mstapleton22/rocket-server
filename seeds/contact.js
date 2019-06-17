
exports.seed = function (knex, Promise) {
  return knex('contact').del()
    .then(function () {
      return knex('contact').insert([
        { id: 0, hours: 'Hours of Operation: 7 a.m - 6 p.m daily', address: 'Address: 5000 East Alameda Avenue, Denver, Colorado 80249', phone: 'Phone: (303)338-7012', email: 'edwards@augustanadenver.org' },
      ]);
    });
};
