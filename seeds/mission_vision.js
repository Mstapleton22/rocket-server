
exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('mission_vision').del()
      .then(function () {
        // Inserts seed entries
        return knex('mission_vision').insert([
          { id: 1, name: 'mission', body: 'Augustana Early Learning Center serves children and their families through high quality, affordable care and education. We welcome children from diverse cultures, faith traditions, socioeconomic backgrounds, and national origins. We provide learning experiences that foster developmentally-appropriate growth to teach children to love themselves and others.' },
          { id: 2, name: 'vision', body: 'Augustana Early Learning Center is a community outreach ministry of Augustana Lutheran Church with a vision to love children and inspire them to become engaged, emotionally-intelligent, and curious learners.' },
        ]);
      });
  };
  