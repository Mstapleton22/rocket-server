
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('programs').del()
    .then(function () {
      // Inserts seed entries
      return knex('programs').insert([
        { image_name: 'programs/classroom.jpg', image_url:'https://augustana-elc-files.s3-us-west-1.amazonaws.com/programs/classroom.jpg', name: 'Curriculum', body: 'The Creative Curriculum is a comprehensive, research based curriculum that features exploration and discovery as a way of learning, enabling children to develop confidence, creativity and lifelong critical thinking skills.' },
        {
          image_name: 'programs/tunnelbaby.jpg', image_url:'https://augustana-elc-files.s3-us-west-1.amazonaws.com/programs/tunnelbaby.jpg', name: 'Outdoor Learning Experience', body: 'Our Fairy Garden is natural play learning environment and living classroom collaboration with Originative Holistic Designs that incorporates tinkering, sustainable gardening, wild and domesticated plant taxonomy, and bio-sculpture within an emergent science and emotional development curriculum.'
        },
        { image_name: 'music.jpg', image_url:'https://augustana-elc-files.s3-us-west-1.amazonaws.com/programs/music.jpg', name: 'Music Program', body: 'The Music Together curriculum contains weekly music classes that are an artfully conceived flow of playful, developmentally appropriate activities that include singing, movement, finger plays and instrument jams.' },
        { image_name: './class2.jpg', image_url:'https://augustana-elc-files.s3-us-west-1.amazonaws.com/programs/class2.jpg', name: 'School Age Program', body: "For today's busy parents, finding a safe, enriching environment where children can spend time before or after school is a big concern. We understand your needs and we deliver a fun, flexible, and learning-focused program. We currently server children attending Carson, Lowry, McMeen, and Palmer Elementary. Please contact us about possibly adding your child's school. For more information please contact Shirley Koeller at shirley@augustanadenver." },
        { image_name: 'sandboy.jpg', image_url:'https://augustana-elc-files.s3-us-west-1.amazonaws.com/programs/sandboy.jpg', name: 'Art Program', body: 'Our art activities enable children to explore a variety of media and experiment with color, design and construction.' },
        { image_name: 'bicycleboy.jpg', image_url:'https://augustana-elc-files.s3-us-west-1.amazonaws.com/programs/bicycleboy.jpg', name: 'Summer Camp', body: 'Need a safe and fun place for the kids this summer? Join Summer Explorers! An exciting summer is being planned to entertain the kids and to make it a summer to remember. For more information contact Shirley Koeller at shirley@augustanadenver.org' },
      ]);
    });
};
