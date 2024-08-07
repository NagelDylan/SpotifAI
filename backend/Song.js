export const VALENCE = 0;
export const ENERGY = 1;
export const DANCE = 2;
export const LIVELY = 3;

import { getTrackVibes } from "./spotify_api-ARCHIVE/infoCaller.js" //TODO: Update how this works?

const GENRE_FIND_LINK = "https://www.chosic.com/music-genre-finder/?track=";

export class Song {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.genres = [];
    this.vibes = [-1, -1, -1, -1];
    this.language = "";
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

  #analyzeLang() {}

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

  async findGenres() {
    //Genre logic here 
  }
}
