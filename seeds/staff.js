
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('staff').del()
    .then(function () {
      // Inserts seed entries
      return knex('staff').insert([
        { id: 1, name: 'Ms. Wendie', image: '', bio: '' },
        { id: 2, name: 'Ms. Azra', image: '', bio: '' },
        { id: 3, name: 'Ms. Anna', image: '', bio: '' },
        { id: 4, name: 'Ms. Beavy', image: '', bio: '' },
        { id: 5, name: 'Ms. Diane', image: '', bio: "I received my B.A. Degree in Early Childhood Education with an emphasis on Music and Movement from Metropolitan State College of Denver and am Director Qualified. I have been teaching for 40+ years and I have been at Augustana for 19 years and have been with the ladybugs for 3 of those years. Outside of work, I am an avid Bronco Fan! Love to watch movies, listen to music and go on long walks. I come from a big Italian / German family of seven. Spending time with my brothers, sisters, and mom is a big part of my life." },
        { id: 6, name: 'Ms. Jen', image: '', bio: '' },
        { id: 7, name: 'Ms. Kisanet', image: '', bio: '' },
        { id: 8, name: 'Ms. Lori', image: '', bio: "Hi!  I am Lori Kinton. I have a Bachelor of Art degree in Psychology from Northern Illinois University. I am State of Colorado Early Childhood Director Qualified though both Community College of Denver and Arapahoe Community College. In addition, I have training in Pyramid Plus, infant and toddler development, as well as experience with Iters Scale ratings, High Scope and ASQ assessments, NAEYC and Colorado Shines accreditations. While I have have been working in Early Childhood Education for 23 years, I have only been at AELC since July, 2017. I have been married for 23 years and have two daughters who attend Englewood High School.  I was born and spent my early childhood in Wisconsin.  I spent the remainder of my childhood in Rockford Illinois, which is in the Northern part of Illinois, about 70 miles Northwest of Chicago. I love it here in Colorado and proud that my daughters are natives. I enjoy hiking, camping, engaging in our community, and exploring all that Colorado has to offer." },
        { id: 9, name: 'Ms. Megan', image: '', bio: '' },
        { id: 10, name: 'Ms. Noemi', image: '', bio: '' },
        { id: 11, name: 'Ms. Sharon', image: '', bio: '' },
        { id: 12, name: 'Ms. Shirley', image: '', bio: '' },
        { id: 13, name: 'Ms. Tamika', image: '', bio: '' },
        { id: 14, name: 'My Yuliya', image: '', bio: '' },
        { id: 15, name: 'Ms. Zoe', image: '', bio: "I have a Bachelor of Science in Interdisciplinary Studies in Social Science with a Concentration in Health and Society and CDA. I am currently working on obtaining my Coaching Credential. I started off volunteering for about 4 years (2004 - 2008), before I jumped into being a teacher full-time and thoroughly enjoy encouraging these young minds to grow. I joined Augustana 2 years ago in 2017. Outside of work, I love spending time with my husband Larry and our black lab named Beau." },
      ]);
    });
};
