import SpotifyWebApi from 'spotify-web-api-node';
import { CLIENT_ID, SECRET_CLIENT } from './vars.js'

var spotifyApi = new SpotifyWebApi({
  clientId: CLIENT_ID,
  clientSecret: SECRET_CLIENT,
  redirectUri: 'http://localhost:3000/callback'
});

export default spotifyApi