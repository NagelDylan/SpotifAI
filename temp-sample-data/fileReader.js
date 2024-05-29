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
    //Can do something here if u want
});

//Event handler for handling errors
readInterface.on("error", (err) => {
    console.error("Error reading the CSV file: ", err);
});

//~~~~~~~~~~~~~~~~~~~~~
//NOTE: since functions run asyncrhounously, you need to use a promise or callback to ensure all the data's been loaded in
// function getDance(trackID) {
//     console.log(output);
//     //return output.trackID;
// }
// getDance("7bF6tCO3gFb8INrEDcjNT5")
// //console.log(getDance("7bF6tCO3gFb8INrEDcjNT5"));

async function getDance(trackID) {
    
}

