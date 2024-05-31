const VALENCE = 0;
const ENERGY = 1;
const DANCE = 2;
const LIVELY = 3;

const GENRE_FIND_LINK = "https://www.chosic.com/music-genre-finder/?track=";
const puppeteer = require('puppeteer');

class Song {    
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.genres = [];
        this.vibes = [-1, -1, -1, -1];
        this.language = '';
        this.isLangCert = false;
    }

    setValence(valence) {
        this.vibes[VALENCE] = valence;
    }

    setEnergy(energy) {
        this.vibes[ENERGY] = energy;
    }

    setDance(dance) {
        this.vibes[DANCE] = dance;
    }

    setLively(lively) {
        this.vibes[LIVELY] = lively;
    }

    getVibes() {
        return this.vibes;
    }

    getGenres() {
        return this.genres;
    }

    #analyzeLang() {

    }

    getLang() {
        return this.language;
    }

    getLangCert() {
        return this.isLangCert;
    }

    async scrapeGenres() {    
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(GENRE_FIND_LINK + this.id, { waitUntil: 'networkidle0'});
    
        const genres = await page.evaluate(() => {
            const genreElements = document.querySelectorAll('.spotify-result .pl-tags a');
            return Array.from(genreElements).map(link => link.textContent);
        });
        
        this.genres = genres;

        await browser.close();

        console.log(this.genres);
    }
}

module.exports = {
    Song,
    VALENCE,
    ENERGY,
    DANCE,
    LIVELY
};