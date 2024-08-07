import { detect, detectAll } from "tinyld";
import { getLyrics, getSong } from "genius-lyrics-api";
import dotenv from "dotenv";

dotenv.config();

const detectLang = async (song) => {
  const options = {
    apiKey: process.env.GENIUS_ACCESS_TOKEN,
    title: song.title,
    artist: song.artist,
    optimizeQuery: true,
  };

  const lyrics = await getLyrics(options);
  console.log(lyrics);
  console.log(detectAll(lyrics));
};

export default detectLang
