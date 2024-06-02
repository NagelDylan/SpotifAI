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

async function fetchTrackInfo(songID) {
    const { access_token } = await getToken();
    const response = await fetch("https://api.spotify.com/v1/tracks/" + songID, {
        method: "GET",
        headers: { 'Authorization': 'Bearer ' + access_token }
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
 * @param {string} songID 
 * @returns Track name, ID, artists, image URL, , release date, duration (in ms) and if explicit
 */
 async function getTrackDisplayInfo(songID) {
    const displayInfo = await fetchTrackInfo(songID);
    const display = {
        name: displayInfo.name,
        id: displayInfo.id,
        artists: displayInfo.artists.map(artist => artist.name),
        image: displayInfo.album.images[1] ? displayInfo.album.images[1].url : 'default_image_url', //Link path to default image! (returns this image if no images found at index 1)
        release_date: displayInfo.album.release_date,
        duration_ms: displayInfo.duration_ms,
        explicit: displayInfo.explicit
    }
    
    return display;
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

module.exports = { getTrackVibes };