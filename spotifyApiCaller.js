const SpotifyWebAPI = require('spotify-web-api-node');

const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}

// require('dotenv').config();
// const express = require('express');
// const SpotifyWebAPI = require('spotify-web-api-node');

// const app = express();
// const port = 3050;

// const spotifyAPI = new SpotifyWebAPI({
//     clientId: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     redirectUri: process.env.REDIRECT_URI
// });

// app.get('', (req, res) => {
//     const scopes = [
//         'playlist-read-private', 
//         'playlist-read-collaborative'
//     ];
//     res.redirect(spotifyAPI.createAuthorizeURL(scopes));
// });

// app.get('/callback', (req, res) => {
//     const error = req.query.error;
//     const code = req.query.code;

//     if (error) {
//         console.error("Error: ", error);
//         res.send(`Error: ${error}`);
//         return;
//     }

//     spotifyAPI.authorizationCodeGrant(code).then(data => {
//         const accessToken = data.body['access_token'];
//         const refreshToken = data.body['refresh_token'];
//         const expiresIn = data.body['expires_in'];

//         spotifyAPI.setAccessToken(accessToken);
//         spotifyAPI.resetRefreshToken(refreshToken);

//         res.send('Success!');

//         setInterval(async() => {
//             const data = await spotifyAPI.resetAccessToken();
//             const accessTokenRefreshed = data.body['access_token'];
//             spotifyAPI.setAccessToken(accessTokenRefreshed);
//         }, expiresIn/2*1000)
//     })
//     .catch(error => {
//         console.error("Error: ", error);
//         res.send('Error getting token');
//     });
// });

// app.get('/search', (req, res) => {
//     const {q} = req.query;
//     spotifyAPI.searchTracks(q).then(searchData => {
//         const trackUri = searchData.body.tracks.items[0].uri;
//         res.send({uri:trackUri});
//     })
//     .catch(err => {
//         res.send(`Error searching: ${err}`);
//     })
// });

// //EXAMPLE
// app.get('/play', (req, res) => {
//     const {uri} = req.query;
//     spotifyAPI.play({uris:[uri]}).then(() => {
//         res.send('playback started');
//     })
//     .catch(err => {
//         res.send(`Error playing: ${err}`);
//     })
// });

// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// })