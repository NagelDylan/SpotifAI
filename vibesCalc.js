const { Song, VALENCE, ENERGY, DANCE, LIVELY } = require('./Song');

// let danceMed;
// let energyMed;
// let livelyMed;
let valenceMed;

/**
 * 
 * @param {[Song]} songsArr 
 */
function getMedianDance(songsArr) {
    songsArr.sort((a, b) => a - b);
    const middleIndex = Math.floor(songsArr.length / 2);

    if (songsArr.length % 2 === 0) {
        return (songsArr[middleIndex - 1] + songsArr[middleIndex]) / 2;
    }
    else {
        return songsArr[middleIndex];
    }
}