import { detectAll } from 'tinyld';

//EXAMPLE:
const textSimple = "This is a test lyric to see if the language detection is accurate. One language only"
const textHard = `This is a test lyric to see if the language detection is accurate. Two languages!
                    Ceci un test de paroles pour voir si la détection de la langue est exacte. 
                    Il y a deux langues!`
const textForeign = "Это тестовый текст, чтобы проверить точность определения языка. Только один язык"

console.log("Simple: ", detectAll(textSimple))
console.log("Hard: ", detectAll(textHard))
console.log("Foreign: ", detectAll(textForeign))
//~~~~~~~

