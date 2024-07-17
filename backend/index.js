const { Song, VALENCE, ENERGY, DANCE, LIVELY } = require("./Song");
const {
  getMedianVibeSong,
  getFurthestVibeSong,
} = require("./algorithm_drafts/vibesCalc");

const song1 = new Song("6habFhsOp2NvshLv26DqMb", "Despacito");

const arr = [
  new Song("6habFhsOp2NvshLv26DqMb", "Despacito"),
  new Song(
    "6f807x0ima9a1j3VPbc7VN",
    "I Don't Care (with Justin Bieber) - Loud Luxury Remix"
  ),
  new Song("4jDmJ51x1o9NZB5Nxxc7gY", "Careless Whisper"),
  new Song("0TK2YIli7K1leLovkQiNik", "Señorita"),
  new Song(
    "7mkT9kS25nUIoNkm02Ww0n",
    "These Days (feat. Jess Glynne, Macklemore & Dan Caplen)"
  ),
  new Song("3e9HZxeyfWwjeyPAMmWSSQ", "thank u, next"),
  new Song("1PB7gRWcvefzu7t3LJLUlf", "El Scorcho"),
];

//Working example of setting/getting vibes
song1.setVibes().then(() => {
  console.log(`${song1.title} vibes: ${song1.getVibes()}`);
});

async function setVibes(songsArr) {
  await Promise.all(
    songsArr.map(async (song) => {
      await song.setVibes();
    })
  );
}

song1.setValence(0.5);

//Working example of genre scraping
const GENRE_FIND_LINK = "https://www.chosic.com/music-genre-finder/?track=";
song1.scrapeGenres();

//Working example of getting song w/ median vibes & getting song w/ vibe furthest from median
setVibes(arr).then(() => {
  console.log(
    "Song with specified median attribute: \n",
    getMedianVibeSong(arr, ENERGY)
  );
  console.log(
    "Song furthest from specified median attribute: \n",
    getFurthestVibeSong(arr, ENERGY)
  );
});
