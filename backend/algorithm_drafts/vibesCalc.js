const { Song, VALENCE, ENERGY, DANCE, LIVELY } = require("../Song");

/**
 *
 * @param {[Song]} songsArr
 * @param {int} vibe - As defined in the Song object
 * @return { Song }  the song object with the median vibe
 */
function getMedianVibeSong(songsArr, vibe) {
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
 */
function getFurthestVibeSong(songsArr, vibe) {
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

module.exports = { getMedianVibeSong, getFurthestVibeSong };
