const { Song, VALENCE, ENERGY, DANCE, LIVELY } = require('./Song');
const { getDance, getEnergy, getLively, getValence } = require('./temp-sample-data/fileReader')


const song1 = new Song('0pqnGHJpmpxLKifKRmU6WP', 'Believer');

song1.setValence(0.5);
/*
//TEMPLATE FOR CALLING ASYNC FILE IO FUNCTIONS:
//~~~~~~~~~~
const TEMP_ID = '1e8PAfcKUYoKkxPhrHqw4x'; //Just to display ID

async function main() {
    let dance = await getDance(TEMP_ID);
    console.log(dance);
}

main()
//~~~~~~~~~~~~~~~*/


const GENRE_FIND_LINK = "https://www.chosic.com/music-genre-finder/?track=";
const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeData(id) {
    const url = GENRE_FIND_LINK + id
    const response = await axios.get(url);
    const html = response.data;

    console.log("hellO");
    console.log(url);
    console.log(html);

    if (html) {
        const $ = cheerio.load(html)

        $('.pl-tags a').each((index, element) => {
            const text = $(element).text();
            console.log(text);
        });
    }
    
}



song1.scrapeGenres();