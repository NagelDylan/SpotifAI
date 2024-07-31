const getWantedGenres = (songsArr) => {
  const allGenres = [];

  songsArr.map((song) => {
    song.genres.forEach((genre) => {
      let index = allGenres.findIndex((g) => g.genre === genre);

      if (index !== -1) {
        allGenres[index].quantity++;
      } else {
        allGenres.push({ genre: genre, quantity: 1 });
      }
    });
  });

  allGenres.sort((a, b) => b.quantity - a.quantity);

  let prefGen = [];

  if (allGenres.count <= 3) {
    allGenres.map((item) => {
      prefGen.push(item.genre);
    });
  } else {
    for (let i = 0; i < 3; ++i) {
      prefGen.push(allGenres[i].genre);
    }
  }

  return prefGen;
};

export default getWantedGenres;