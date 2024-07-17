import { Song, VALENCE, ENERGY, DANCE, LIVELY } from "../Song.js";

/**
 * @param {[Song]} songsArr
 * @param {int} vibe - As defined in the Song object
 * @return { Song }  the song object with the median vibe
 */
export function getMedianVibeSong(songsArr, vibe) {
  songsArr.sort((a, b) => a.getVibes()[vibe] - b.getVibes()[vibe]);
  const middleIndex = Math.floor(songsArr.length / 2);

  if (songsArr.length % 2 === 0) {
    return (songsArr[middleIndex - 1] + songsArr[middleIndex]) / 2;
  } else {
    return songsArr[middleIndex];
  }
}

/**
 *
 * @param {[Song]} songsArr
 * @param {int} vibe - As defined in the Song object
 * @return { Song }  the song object with the furthest vibe
 */
export function getFurthestVibeSong(songsArr, vibe) {
  const median = getMedianVibeSong(songsArr, vibe);

  songsArr.sort((a, b) => a.getVibes()[vibe] - b.getVibes()[vibe]);

  const lowest = songsArr[0];
  const highest = songsArr[songsArr.length - 1];

  if (
    highest.vibes[vibe] - median.vibes[vibe] >
    median.vibes[vibe] - lowest.vibes[vibe]
  ) {
    return highest;
  } else {
    return lowest;
  }
}

//~~Vibes to Text Conversion~~//

//TEMP CONVERSION - update once more data is available
/**
 * 
 * @param {[int]} vibes
 * @return {string} 
 */
function getVibeDescription(vibes) {
    vibeRanges = {
        valence: null,
        energy: null,
        dance: null,
        lively: null
    }
}
