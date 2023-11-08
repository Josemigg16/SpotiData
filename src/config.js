import SpotifyWebApi from 'spotify-web-api-node';
import { CLIENT_ID, SECRET_CLIENT } from './vars.js'

export const scopes = [
  'user-read-email',
  'streaming',
  'user-read-private',
  'user-library-read',
  "user-top-read"]


export const spotifyApi = new SpotifyWebApi({
  clientId: CLIENT_ID,
  clientSecret: SECRET_CLIENT,
  redirectUri: 'http://localhost:3000/callback'
});