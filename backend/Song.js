export const VALENCE = 0;
export const ENERGY = 1;
export const DANCE = 2;
export const LIVELY = 3;

import { getTrackVibes } from "./spotify_api-ARCHIVE/infoCaller.js" //TODO: Update how this works?
import puppeteer from "puppeteer";

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

  async scrapeGenres() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(GENRE_FIND_LINK + this.id);
    await page.waitForSelector(".spotify-result .pl-tags a", { visible: true });
    const genres = await page.evaluate(() => {
      const genreElements = document.querySelectorAll(
        ".spotify-result .pl-tags a"
      );
      return Array.from(genreElements).map((link) => link.textContent);
    });
    this.genres = genres;
    await browser.close();
    console.log(this.genres);
  }
}
