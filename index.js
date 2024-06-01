const { Song, VALENCE, ENERGY, DANCE, LIVELY } = require('./Song');
const { getDance, getEnergy, getLively, getValence } = require('./temp-sample-data/fileReader')

const song1 = new Song('12345', 'howdy sir');
song1.addGenre("monkey");

song1.setValence(0.5);

console.log(song1.getGenres());

//Working example of setting/getting vibes
const song2 = new Song(TEMP_ID, 'Shake It Off')
song2.setVibes().then(() => {
    console.log(song2.getVibes())
})