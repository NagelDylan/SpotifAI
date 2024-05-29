//Just making sure that git is set up correctly.
const { Song, VALENCE, ENERGY, DANCE, LIVELY } = require('./Song');

const song1 = new Song('12345', 'howdy sir');
song1.addGenre("monkey");

song1.setValence(0.5);

console.log(song1.getGenres());