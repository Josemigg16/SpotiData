import jwt from 'jsonwebtoken'
import spotifyApi from '../config.js'

export const Login = (req, res) => {
    res.redirect(spotifyApi.createAuthorizeURL(scopes));
}