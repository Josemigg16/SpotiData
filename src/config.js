import SpotifyWebApi from 'spotify-web-api-node';

var spotifyApi = new SpotifyWebApi({
    clientId: '',
    clientSecret: '',
    redirectUri: 'http://localhost:3000/callback'
  });

export default spotifyApi