
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('accreditation').del()
    .then(function () {
      // Inserts seed entries
      return knex('accreditation').insert([
        { image_name: 'accreditations/COShines_Accreditation.png', image_url: 'https://augustana-elc-files.s3-us-west-1.amazonaws.com/accreditations/COShines_Accreditation.png' },
        { image_name: 'accreditations/COShines_Program Quality Rating_4 Diamonds.png', image_url: 'https://augustana-elc-files.s3-us-west-1.amazonaws.com/accreditations/COShines_Program+Quality+Rating_4+Diamonds.png' },
        { image_name: 'ccreditations/ECADAlogo.gif', image_url: 'https://augustana-elc-files.s3-us-west-1.amazonaws.com/accreditations/ECADAlogo.gif' },
      ]);
    });
};
