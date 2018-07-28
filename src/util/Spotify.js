const clientId = 'ClientID';
const redirectURI = 'http://localhost:3000';


let accessToken

const Spotify = {
    getAccessToken(){
        if(accessToken){
            return accessToken
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const spotifyAuthorizeURI = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
            window.location = spotifyAuthorizeURI;
        }
    },

    search(searchTerm){
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm})`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`}
            }).then(response => {
                return response.json();
            }).then(jsonResponse => {
                if (!jsonResponse.tracks) {
                    return [];
                }
                return jsonResponse.tracks.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }));
            });
    },

    savePlaylist(playlistName, trackURIs){
        if(!playlistName || !trackURIs.length){
            return;
        }

        const accessToken = Spotify.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}` };
        let user_id;

        return fetch (`https://api.spotify.com/v1/me`, {headers: headers
        }).then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(jsonResponse => {
            user_id = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({name: playlistName})
            }).then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log('Failed request from API');
                }
            }).then(jsonResponse => {
                const playlist_id = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`, {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({uris: trackURIs})
                });
            });
        });
    
    }

}

export default Spotify;