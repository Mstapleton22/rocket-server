
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('carousel').del()
    .then(function () {
      // Inserts seed entries
      return knex('carousel').insert([
        { id: 1, image: '', quote: "I am aquogte", quoter: "- Madonna" },
        { id: 2, image: '', quote: "I am aquogte", quoter: "- Madonna" },
        { id: 3, image: '', quote: "I am aquogte", quoter: "- Madonna" }
      ]);
    });
};
