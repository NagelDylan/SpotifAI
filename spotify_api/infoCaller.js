require('dotenv').config();

const client_id = process.env.CLIENT_ID; 
const client_secret = process.env.CLIENT_SECRET;

async function getToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
    },
  });

  return await response.json();
}

async function fetchTrackAudioFeatures(songID) {
    const { access_token } = await getToken();
    const response = await fetch("https://api.spotify.com/v1/audio-features/" + songID, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + access_token }
    });

    return await response.json();
}

/**
 * 
 * @param {string} songID 
 * @returns Array of track vibes (index order as specified in Song.js)
 */
async function getTrackVibes(songID) {
    const audioFeatures = await fetchTrackAudioFeatures(songID);
    return [audioFeatures['valence'], 
            audioFeatures['energy'], 
            audioFeatures['danceability'], 
            audioFeatures['liveness']];
}

/**
 * @returns Track name and ID
 */
async function getTrackMainInfo(access_token) {
    //Use this for search functionality
    //TODO: will need to create a function to search for tracks and display them in the first place 
}

module.exports = { getTrackVibes };