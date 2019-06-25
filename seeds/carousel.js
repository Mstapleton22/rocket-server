
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('carousel').del()
    .then(function () {
      // Inserts seed entries
      return knex('carousel').insert([
        { image_name:  "bicycleboy.jpg",  image_url: 'https://augustana-elc-files.s3-us-west-1.amazonaws.com/carousel/bicycleboy.jpg', quote: "Noble absolutely adores his teachers. He’s excited to go to school to spend time in the fairy garden. We’re learning more and more each day through him as well. Augustana has a great program and support structure, thats been great for him.", quoter: "Zain & Lauren Master" },  
        { image_name: 'playground.jpg', image_url: 'https://augustana-elc-files.s3-us-west-1.amazonaws.com/carousel/playground.jpg', quote: "We are dedicated to help your child develop academically and socially, but encourage their personalities and bring out their unique traits too.", quoter: "ZAzra Beganovic (Augustana teacher for 21 years)" },
        { image_name: 'tunnelkids.jpg', image_url: 'https://augustana-elc-files.s3-us-west-1.amazonaws.com/carousel/tunnelkids.jpg', quote: "My Jesse can't stop talking about their time spent in the fairy garden. I'm just excited to see them outdoors!", quoter: "Shelly Shermani" },
        { image_name: 'frontdoor.jpg', image_url: 'https://augustana-elc-files.s3-us-west-1.amazonaws.com/carousel/frontdoor-1.jpg', quote: "The music program literally brings music to my ears! This is one of the reasons we chose AELC as a family.", quoter: "Jared, Lexi and Michelle Growski" },
        { image_name: 'lunchboysmile.jpg', image_url: 'https://augustana-elc-files.s3-us-west-1.amazonaws.com/carousel/lunchboy.jpg', quote: "Having joined the AELC family only just a year ago, I know that this is where my heart belongs. Creating an environment that allows young people to flourish is where I belong.", quoter: "Ms. Wendie" }
      ]);
    });
};
