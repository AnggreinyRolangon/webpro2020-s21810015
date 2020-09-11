let movies = [
  {
    title: 'crash landing on you',
    rating: 5,
    penonton: true
  },
  {
    title: 'cursed',
    rating: 4.9,
    penonton: false
  },
  {
    title: "I'm not a robot",
    rating: 4.9,
    penonton: true
  },
  {
    title: 'itaewon class',
    rating: 4.7,
    penonton: false
  }
];

for (var i = 0; i < movies.length; i++) {
  if (movies[i].penonton===true) {
    console.log(`saya pernah nonton film ${movies[i].title} - ${movies[i].rating} stars`);
  } else {
    console.log(`saya pernah belum nonton film ${movies[i].title} - ${movies[i].rating} stars`);
  }
}