const { Song, VALENCE, ENERGY, DANCE, LIVELY } = require('../Song');

/**
 * 
 * @param {[Song]} songsArr 
 * @param {int} vibe - As defined in the Song object
 */
function getMedianVibe(songsArr, vibe) {
    songsArr.sort((a, b) => a.getVibes()[vibe] - b.getVibes()[vibe]);
    const middleIndex = Math.floor(songsArr.length / 2);

    if (songsArr.length % 2 === 0) {
        return (songsArr[middleIndex - 1] + songsArr[middleIndex]) / 2;
    }
    else {
        return songsArr[middleIndex];
    }
}

module.exports = { getMedianVibe }