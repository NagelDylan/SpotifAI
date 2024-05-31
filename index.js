const { Song, VALENCE, ENERGY, DANCE, LIVELY } = require('./Song');
const { getDance, getEnergy, getLively, getValence } = require('./temp-sample-data/fileReader')

const song1 = new Song('12345', 'howdy sir');
song1.addGenre("monkey");

song1.setValence(0.5);

console.log(song1.getGenres());

//TEMPLATE FOR CALLING ASYNC FILE IO FUNCTIONS:
//~~~~~~~~~~
const TEMP_ID = '1e8PAfcKUYoKkxPhrHqw4x'; //Just to display ID

async function main() {
    let dance = await getDance(TEMP_ID);
    console.log(dance);
}

main()
//~~~~~~~~~~~~~~~