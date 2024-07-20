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
const vibeRanges = {
    valence: {
        range: [0.2, 0.4, 0.6, 0.8, 1],
        description: ["sad", "mildly sad", "neutral-mid happy", "happy", "incredibly happy"]
    },
    energy: {
        range: [0.15, 0.4, 0.7, 1],
        description: ["not energetic", "mildly energetic", "energetic", "ecstaticly energetic"]
    },
    dance: {
        range: [0.3, 0.6, 1],
        description: ["not danceable", "fairly danceable", "so danceable"]
    },
    lively: {
        range: [0.25, 0.5, 0.8, 1],
        description: ["not lively", "somewhat lively", "lively", "very lively"]
    }
}

/**
 * 
 * @param {[int]} vibes
 * @return {string} 
 */
//TODO: FIX. vibes.VALENCE doesn't work (is undefined), but vibes[0] does.
export function describeSongVibes(vibes) {
    const songVibes = {
        valence: vibes[VALENCE],
        energy: vibes[ENERGY],
        dance: vibes[DANCE],
        lively: vibes[LIVELY]
    }

    console.log(songVibes)

    let vibeDesc = "";

    for (const vibe in vibeRanges) {
        if (vibeRanges.hasOwnProperty(vibe) && songVibes.hasOwnProperty(vibe)) {
            vibeDesc += getDescForVibe(vibeRanges[vibe], songVibes[vibe]) + " ";
        }
    }

    return vibeDesc.trim();
}

function getDescForVibe(vibe, value) {
    const ranges = vibe.range;
    const descriptions = vibe.description;

    for (let i = 0; i < ranges.length; i++) {
        if (value <= ranges[i]) {
            return descriptions[i];
        }
    }

    return descriptions[descriptions.length - 1];
}