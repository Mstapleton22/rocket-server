
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('accreditation').del()
    .then(function () {
      // Inserts seed entries
      return knex('accreditation').insert([
        {id: 1, name:'accred_1', image_name: 'accreditations/COShines_Accreditation.png', image_url: 'https://elcdenver.s3-us-west-1.amazonaws.com/accreditations/COShines_Accreditation.png'},
        {id: 2, name:'accred_3', image_name: 'accreditations/ECADAlogo.gif', image_url: 'https://elcdenver.s3-us-west-1.amazonaws.com/accreditations/ECADAlogo.gif' },
        {id: 3, name:'accred_2', image_name: 'accreditations/COShines_Program Quality Rating_4 Diamonds.png', image_url: 'https://elcdenver.s3-us-west-1.amazonaws.com/accreditations/COShines_Program+Quality+Rating_4+Diamonds.png' },
      ]);
    });
};
