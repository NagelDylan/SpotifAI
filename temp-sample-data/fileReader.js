const fs = require("fs");
const readline = require("readline");

const path = "spotify_songs.csv";

//Set the working directory to that of this script
process.chdir(__dirname);

//Create a read stream
const readStream = fs.createReadStream(path);

//Create a readline interface
const readInterface = readline.createInterface({
    input: readStream
});

//Store output data
const output = {};

//Track the headers outlined in the file
const TRACK_ID = 0;
let headers;

//Event handler for reading lines

function readFile()
{
    return new Promise((resolve, reject) => {
        let isFirstLine = true;
        readInterface.on("line", (line) => {
            const row = line.split(",");
            if (isFirstLine) {
                headers = row;
                isFirstLine = false;
            }
            else {
                songObj = {};
    
                for (let i = 1; i < row.length; i++)
                {
                    songObj[headers[i]] = row[i];
                }
    
                output[row[TRACK_ID]] = songObj;
            }
        });

        //Event handler for end of file
        readInterface.on("close", () => {
            resolve(output);
        });

        //Event handler for handling errors
        readInterface.on("error", (err) => {
            reject(err);
        });
    })
}

//~~~~~~~~~~~~~~~~~~~
async function getDance(trackID) {
    const output = await readFile();

    return output[trackID].danceability;
}

async function getEnergy(trackID) {
    const output = await readFile();

    return output[trackID].energy;
}

async function getLively(trackID) {
    const output = await readFile();

    return output[trackID].liveness;
}

async function getValence(trackID) {
    const output = await readFile();

    return output[trackID].valence;
}

module.exports = {
    getDance,
    getEnergy,
    getLively,
    getValence
};