console.log("hello");
const Song = require('./Song');

const song1 = new Song('12345', 'howdy sir');
song1.addGenre("monkey");

song1.printGenres();

song1.setValence(0.5);
console.log(song1.getValence());
