
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('parentHandbook').del()
    .then(function () {
      // Inserts seed entries
      return knex('parentHandbook').insert([
        { id: 1, name: 'resources/parentHandbook.pdf', url:'https://elcdenver.s3-us-west-1.amazonaws.com/resources/parentHandbook.pdf' },
      ]);
    });
};
