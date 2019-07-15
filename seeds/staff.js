
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('staff').del()
    .then(function () {
      // Inserts seed entries
      return knex('staff').insert([
        { name: 'Ms. Wendie', image_name: 'staff/ms.wendie.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.wendie.jpg', bio: '' },
        { name: 'Ms. Azra', image_name: 'staff/ms.azra.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.azra.jpg', bio: "My name is Ms. Azra! I am one of the Firefly Room teachers here at AELC. I studied Chemistry at the University of Sarajevo in Bosnia. I have been with AELC for 21 years. I enjoy spending time with my family and exploring our beautiful state. I am passionate about politics and contemporary issues." },
        { name: 'Ms. Diane', image_name: 'staff/ms.diane.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.diane.jpg', bio: "Hi my name is Ms. Diane! I am one of the Butterfly Room teachers here at AELC. I received my B.A. in Early Childhood Education with an emphasis on Music and Movement from MSU. I am also Director Qualified. I have been teaching in this field for 40+ years. I have been with AELC for 19 years. I am an avid Broncos Fan! On my spare time I like to watch movies, listen to music, spend time with my family and go on long walks!" },
        { name: 'Ms. Jen', image_name: 'staff/ms.jen.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.jen.jpg', bio: "Hi my name is Ms. Jen! I am one of the Cricket Room teachers here at AELC. I graduated from the University of Colorado at Boulder in 2009 with a B.A. in Anthropology and a teaching certificate for secondary social studies education. I have earned endorsements for elementary and early childhood education. I have been teaching here at Augustana since 2013. On my free time I like to spend time with my family, read, travel, and listen to music! I always appreciate a good nerd throwdown!" },
        { name: 'Ms. Kisanet', image_name: 'staff/ms.kisanet.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.kisanet.jpg', bio: "Hi my name is Ms. Kisanet! I am one of the Cricket Room teachers here at AELC. I have a B.A. in Sociology and Social Work, a Masters in International Development, a Graduate Diploma in Instruction and Curriculum, Colorado Teaching license K-6 and Endorsements in Early Childhood Education 0-8, Colorado Shines Level 3 Teaching license. I also have 8 years of experience in the field. I have been with AELC for 6 years now. I love to read, meditate, hike, swim and have deep conversations in my spare time!" },
        { name: 'Ms. Lori', image_name: 'staff/ms.lori.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.lori.jpg', bio: "Hi my name is Ms. Lori! I am one of the Bumblebee Room teachers here at AELC. I have received my B.A. in Psychology from Northern Illinois University. I am State of Colorado Early Childhood Director Qualified through both Community College of Denver and Arapahoe Community College. I have training in Pyramid Plus, Infant and Toddler Development, as well as experience with ITERS Scale ratings, High Scope and ASQ assessments. NAEYC and Colorado Shines accreditations. I have been working in Early Childhood Education for 23 years. I have been with AELC for 2 years. I enjoy hiking, camping, engaging in our community and exploring all that Colorado has to offer." },
        { name: 'Ms. Megan', image_name: 'staff/ms.megan.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.megan.jpg', bio: "Hi my name is Ms. Megan! I am one of the Ladybug Room teachers here at AELC. I have a Lead Teacher certification and have training in First Aid/CPR. I have been working in this field for 4 years. I have been with AELC for 4 years. I come from a long line of educators with a passion for teaching as well as learning." },
        {  name: 'Ms. Noemi', image_name: 'staff/ms.noemi.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.noemi.jpg', bio: "My name is Ms. Mimi! I am a float staff here at AELC. I am a current business and finance major at MSU Denver, I have been with AELC for 1 year. In my free time, I enjoy walking my dog at the park and hanging out with friends." },
        { name: 'Ms. Sharon', image_name: 'staff/ms.sharon.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.sharon.jpg', bio: "Hi my name is Ms. Sharon! I am a Toddler Room support teacher here at AELC. I graduated with a degree in Science and later on got my education degree and a teaching certificate for elementary school. I have subbed, taught elementary school and middle school as well as adult education teaching English. I have been teaching early childhood for 2 years and have 13 years of experience. I have been with AELC for 2 years. I love spending time with my family, gardening, adult coloring pages, reading and swimming with my kiddo!" },
        { name: 'Ms. Shirley', image_name: 'staff/ms.shirley.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.shirley.jpg', bio: "Hi my name is Shirley Koeller. I am the School Age Coordinator here at AELC. I attended the University of Northern Colorado and received my B.A. in Elementary Education. I have over 20 years of experience. I have been with AELC for 6 months. On my free time I enjoy reading, scrapbooking, movies, traveling, and I’m especially fond of cruises. I am an avid Broncos fan and also follow the Avalanche and Rockies. I love hanging out with my family." },
        { name: 'Ms. Tamika', image_name: 'staff/ms.tamika.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.tamika.jpg', bio: "Hi my name is Ms. Tamika! I am one of the Bumblebee Room teachers here at AELC. I attended Community College of Denver. I have worked with children with autism for Cherry Creek School District and have experience with Colorado Shines ratings and Gold Strategies assessments. I have been in child care for 15 years. I have been with AELC for 1 year. I have a passion for cooking and learning new recipes. I enjoy spending time with my family, traveling, listening to jazz and going to the mountains!" },
        { name: 'Ms. Yuliya', image_name: 'staff/ms.yuliya.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.yuliya.jpg', bio: "Hi my name is Ms. Yulia! I am one of the Firefly Room teachers here at AELC. I received a Bachelor’s Degree in Russian Language and Literature in Kiev, Ukraine. I then moved to Denver and graduated with Bachelor’s Degree in Psychology from University of Colorado. This will be my 21 st year at AELC. My husband and I enjoy hiking and reading. I also love to travel!" },
        { name: 'Ms. Zoe', image_name: 'staff/ms.zoe.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.zoe.jpg', bio: "Hi my name is Ms. Zoe! I am the Butterfly Room teacher here at AELC. I have a B.S. in Interdisciplinary Studies in Social Science with a Concentration in Health and Society. I am also currently obtaining my Coaching Credentials. I have volunteered in this field for 4 years and have professionally worked in the field for 10. I have been with the AELC Team for 2 years this September. I love to spend time with my husband Larry and my dog Beau." },
        { name: 'Ms. Brooke', image_name: 'staff/ms.brooke.jpg', image_url:'https://elcdenver.s3-us-west-1.amazonaws.com/staff/ms.brooke.jpg', bio: "Hi my name is Ms. Brooke! I am the Office Coordinator here at AELC. I am currently attending MSU Denver as a Business Management major. I have been with the AELC Team for 6 months now. Summer has been a blast and I am so excited to start the school year! I am a Colorado native and I absolutely adore the outdoors and avidly hike, fish, and hammock. You can always catch me in the woods swinging in a hammock and playing my ukulele. I also love spending time with my friends at art galleries, museums and coffee shops. I am a music lover so I’m always open to new music suggestions! Stop by the front desk and say hi! I look forward to getting to know you all!" },
      ]);
    });
};
