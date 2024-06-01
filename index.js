const { Song, VALENCE, ENERGY, DANCE, LIVELY } = require('./Song');
const { getDance, getEnergy, getLively, getValence } = require('./temp-sample-data/fileReader')


const song1 = new Song('6habFhsOp2NvshLv26DqMb', 'Despacito');

//Working example of setting/getting vibes
song1.setVibes().then(() => {
    console.log(song1.getVibes())
})

song1.setValence(0.5);

const GENRE_FIND_LINK = "https://www.chosic.com/music-genre-finder/?track=";

song1.scrapeGenres();