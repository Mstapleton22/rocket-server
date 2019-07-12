
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('carousel').del()
    .then(function () {
      // Inserts seed entries
      return knex('carousel').insert([
        { id:1, image_name: "carousel/bicycleboy.jpg",  image_url: 'https://elcdenver.s3-us-west-1.amazonaws.com/carousel/bicycleboy.jpg', quote: "Noble absolutely adores his teachers. He’s excited to go to school to spend time in the fairy garden. We’re learning more and more each day through him as well. Augustana has a great program and support structure, thats been great for him.", quoter: "Zain & Lauren Master" },  
        {id:2, image_name: 'carousel/playground.jpg', image_url: 'https://elcdenver.s3-us-west-1.amazonaws.com/carousel/playground.jpg', quote: "We are dedicated to help your child develop academically and socially, but encourage their personalities and bring out their unique traits too.", quoter: "ZAzra Beganovic (Augustana teacher for 21 years)" },
        {id:3, image_name: 'carousel/tunnelkids.jpg', image_url: 'https://elcdenver.s3-us-west-1.amazonaws.com/carousel/tunnelkids.jpg', quote: "My Jesse can't stop talking about their time spent in the fairy garden. I'm just excited to see them outdoors!", quoter: "Shelly Shermani" },
        {id:4, image_name: 'carousel/frontdoor.jpg', image_url: 'https://elcdenver.s3-us-west-1.amazonaws.com/carousel/frontdoor.jpg', quote: "The music program literally brings music to my ears! This is one of the reasons we chose AELC as a family.", quoter: "Jared, Lexi and Michelle Growski" },
        {id:5, image_name: 'carousel/lunchboysmile.jpg', image_url: 'https://elcdenver.s3-us-west-1.amazonaws.com/carousel/lunchboy.jpg', quote: "Having joined the AELC family only just a year ago, I know that this is where my heart belongs. Creating an environment that allows young people to flourish is where I belong.", quoter: "Ms. Wendie" }
      ]);
    });
};
