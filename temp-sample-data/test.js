const fs = require("fs");
const readline = require("readline");

const path = "spotify_songs.csv";

console.clear(); // TEMP

// Set the working directory to that of this script
process.chdir(__dirname);

// Create a read stream
const readStream = fs.createReadStream(path);

// Create a readline interface
const readInterface = readline.createInterface({
    input: readStream
});

// Store output data
const output = {};

// Track the headers outlined in the file
const TRACK_ID = 0;
let headers;

// Create a promise to handle file reading completion
const readFilePromise = new Promise((resolve, reject) => {
    let isFirstLine = true;

    // Event handler for reading lines
    readInterface.on("line", (line) => {
        const row = line.split(",");
        if (isFirstLine) {
            headers = row;
            isFirstLine = false;
        } else {
            const songObj = {};

            for (let i = 1; i < row.length; i++) {
                songObj[headers[i]] = row[i];
            }

            output[row[TRACK_ID]] = songObj;
        }
    });

    // Event handler for end of file
    readInterface.on("close", () => {
        resolve(output);
    });

    // Event handler for handling errors
    readInterface.on("error", (err) => {
        reject(err);
    });
});

let dance = -1;

function getDance(trackID) {
    readFilePromise.then(() => {
        console.log(output[trackID]);
        dance = output[trackID].danceability;
    })
    .catch((err) => {
        console.error("Error processing the CSV file: ", err);
    });
    //return output[trackID];
}

// function storeData(trackID) {
//     var songData = output[trackID];
// }

getDance("7bF6tCO3gFb8INrEDcjNT5")

//~~~~~~~~
//Wait for the file to be read and then call getDance
// readFilePromise.then(() => {
//     //const dance = getDance("7bF6tCO3gFb8INrEDcjNT5");
//     //console.log(dance);
// }).catch((err) => {
//     console.error("Error processing the CSV file: ", err);
// });

// async function getDance(trackID) {
//     let songData = await readFilePromise;
//     console.log(songData);
// }

//getDance("1IXGILkPm0tOCNeq00kCPa")

// readFilePromise.then((value) => {
//     output = value;
//     //console.log(output);
// });

// function test() {
//     readFilePromise.then((value) => {
//         output = value;
//         x = value;
//     });
// }

// let x = {}
// let a = -1;

// async function getOutput() {
//     try {
//         const value = await readFilePromise;
//         output = value;
//         x = value;
//     } catch (err) {
//         console.error("Error processing the CSV file: ", err);
//     }
// }

// // async function main() {
// //     await getOutput(); // Wait for getOutput() to complete
// //     return x;
// //     console.log(x); // Now x should contain the data from the file
// // }

// async function getDance(trackID) {
//     await getOutput();

// }