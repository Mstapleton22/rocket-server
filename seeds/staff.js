
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('staff').del()
    .then(function () {
      // Inserts seed entries
      return knex('staff').insert([
        { name: 'Ms. Wendie', image_name: 'staff/ms.wendie.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.wendie.jpg', bio: '' },
        { name: 'Ms. Azra', image_name: 'staff/ms.azra.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.azra.jpg', bio: '' },
        { name: 'Ms. Anna', image_name: 'staff/ms.anna.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.anna.jpg', bio: '' },
        { name: 'Ms. Beavy', image_name: 'staff/ms.beavy.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.beavy.jpg', bio: '' },
        { name: 'Ms. Diane', image_name: 'staff/ms.diane.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.diane.jpg', bio: "I received my B.A. Degree in Early Childhood Education with an emphasis on Music and Movement from Metropolitan State College of Denver and am Director Qualified. I have been teaching for 40+ years and I have been at Augustana for 19 years and have been with the ladybugs for 3 of those years. Outside of work, I am an avid Bronco Fan! Love to watch movies, listen to music and go on long walks. I come from a big Italian / German family of seven. Spending time with my brothers, sisters, and mom is a big part of my life." },
        { name: 'Ms. Jen', image_name: 'staff/ms.jen.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.jen.jpg', bio: '' },
        { name: 'Ms. Kisanet', image_name: 'staff/ms.kisanet.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.kisanet.jpg', bio: '' },
        { name: 'Ms. Lori', image_name: 'staff/ms.lori.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.lori.jpg', bio: "Hi!  I am Lori Kinton. I have a Bachelor of Art degree in Psychology from Northern Illinois University. I am State of Colorado Early Childhood Director Qualified though both Community College of Denver and Arapahoe Community College. In addition, I have training in Pyramid Plus, infant and toddler development, as well as experience with Iters Scale ratings, High Scope and ASQ assessments, NAEYC and Colorado Shines accreditations. While I have have been working in Early Childhood Education for 23 years, I have only been at AELC since July, 2017. I have been married for 23 years and have two daughters who attend Englewood High School.  I was born and spent my early childhood in Wisconsin.  I spent the remainder of my childhood in Rockford Illinois, which is in the Northern part of Illinois, about 70 miles Northwest of Chicago. I love it here in Colorado and proud that my daughters are natives. I enjoy hiking, camping, engaging in our community, and exploring all that Colorado has to offer." },
        { name: 'Ms. Megan', image_name: 'staff/ms.megan.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.megan.jpg', bio: '' },
        {  name: 'Ms. Noemi', image_name: 'staff/ms.noemi.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.noemi.jpg', bio: '' },
        { name: 'Ms. Sharon', image_name: 'staff/ms.sharon.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.sharon.jpg', bio: '' },
        { name: 'Ms. Shirley', image_name: 'staff/ms.shirley.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.shirley.jpg', bio: '' },
        { name: 'Ms. Tamika', image_name: 'staff/ms.tamika.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.tamika.jpg', bio: '' },
        { name: 'My Yuliya', image_name: 'staff/ms.yuliya.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.yuliya.jpg', bio: '' },
        { name: 'Ms. Zoe', image_name: 'staff/ms.zoe.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.zoe.jpg', bio: "I have a Bachelor of Science in Interdisciplinary Studies in Social Science with a Concentration in Health and Society and CDA. I am currently working on obtaining my Coaching Credential. I started off volunteering for about 4 years (2004 - 2008), before I jumped into being a teacher full-time and thoroughly enjoy encouraging these young minds to grow. I joined Augustana 2 years ago in 2017. Outside of work, I love spending time with my husband Larry and our black lab named Beau." },
      ]);
    });
};
