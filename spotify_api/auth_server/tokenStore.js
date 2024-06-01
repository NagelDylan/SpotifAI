//NOTE: consider simply taking tokens from url once front-end is deployed, but look into
//security implications (shouldn't be a big deal)

let tokens = {
    access_token: null,
    refresh_token: null
};

module.exports = {
    getTokens: () => tokens,
    setTokens: (newTokens) => {
        tokens = {...tokens, ...newTokens};
    }
};