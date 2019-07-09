
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('tuition').del()
    .then(function () {
      // Inserts seed entries
      return knex('tuition').insert([
        { id: 1, name: 'K-5th ', image_name: 'tuition/k-5.png', image_url: 'https://elcdenver.s3-us-west-1.amazonaws.com/tuition/k-5.png' },
        { id: 2, name: 'Toddler and Preschool', image_name: 'tuition/tod-pk.png', image_url: 'https://elcdenver.s3-us-west-1.amazonaws.com/tuition/tod-pk.png' },
      ]);
    });
};

