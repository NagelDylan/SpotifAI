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


// async function main() {
//     const data = await getValence("3eFJI470ALf1EYjywPRsJy");
//     console.log(data);
// }

// main()

//~~~~~~~~~~~~~~~~~~~~~

// function getDance(trackID) {
//     readFile()
//     .then(() => {
//         console.log(output[trackID].danceability);
//     })
//     .catch((err) => {
//         console.error("Error reading the CSV file: ", err);
//     })
// }

// function getEnergy(trackID) {
//     readFile()
//     .then(() => {
//         return output[trackID].energy;
//     })
//     .catch((err) => {
//         console.error("Error reading the CSV file: ", err);
//     })
// }

// function getLively(trackID) {
//     readFile()
//     .then(() => {
//         return output[trackID].liveness;
//     })
//     .catch((err) => {
//         console.error("Error reading the CSV file: ", err);
//     })
// }

// function getValence(trackID) {
//     readFile()
//     .then(() => {
//         return output[trackID].valence;
//     })
//     .catch((err) => {
//         console.error("Error reading the CSV file: ", err);
//     })
// }

// async function test(trackID) {
//     const output = await readFile();
//     console.log(output[trackID]);
//     return output;
// }

// const ID = "2v3DuCVBbopteJqdM7aKQK";

// console.log(test(ID));

//console.log(`Dance: ${getDance(ID)}\nEnergy: ${getEnergy(ID)}\nLiveness: ${getLively(ID)}\nValence: ${getValence(ID)}`)
//~~~~~~~~~~
// async function getDance(trackID) {
//     try {
//         const output = await readFile();
//     } catch (err) {
//         console.error("Error reading the CSV file: ", err);
//     }
// }

// async function getEnergy(trackID) {
//     try {
//         const output = await readFile();
//     } catch (err) {
//         console.error("Error reading the CSV file: ", err);
//     }
// }

// async function getLively(trackID) {
//     try {
//         const output = await readFile();
//     } catch (err) {
//         console.error("Error reading the CSV file: ", err);
//     }
// }

// async function getValence(trackID) {
//     try {
//         const output = await readFile();
//     } catch (err) {
//         console.error("Error reading the CSV file: ", err);
//     }
// }

// async function test(trackID) {
//     try {
//         const output = await readFile();
//         console.log(output[trackID]);
//         return output;
//     } catch (err) {
//         console.error("Error reading the CSV file: ", err);
//     }
// }

// const ID = "2v3DuCVBbopteJqdM7aKQK";

// //test(ID); // Call test function without console.log since it already has a console.log inside
// console.log(getDance(ID));
// getEnergy(ID);
// getLively(ID);
// getValence(ID);
