console.log("hello");
const Song = require('./Song');

const song1 = new Song('12345');
song1.addGenre("penis monkey");

song1.printGenres();

song1.setValence(0.5);
console.log(song1.getValence());
