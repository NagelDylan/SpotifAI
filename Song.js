const VALENCE = 0;
const ENERGY = 1;
const DANCE = 2;
const LIVELY = 3;

const { getTrackVibes } = require('./spotify_api/infoCaller');

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

    addGenre(genre) {
        this.genres[this.genres.length] = genre;
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

    async setVibes() {
        const vibes = await getTrackVibes(this.id);

        this.setValence(vibes[VALENCE]);
        this.setEnergy(vibes[ENERGY]);
        this.setDance(vibes[DANCE]);
        this.setLively(vibes[LIVELY]);
    }
}

module.exports = {
    Song,
    VALENCE,
    ENERGY,
    DANCE,
    LIVELY
};