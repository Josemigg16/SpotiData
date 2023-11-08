import jwt from 'jsonwebtoken'
import { spotifyApi, scopes } from '../config.js'
import { CLIENT_ID, SECRET_CLIENT } from '../vars.js';

export const Login = (req, res) => {
    res.redirect(spotifyApi.createAuthorizeURL(scopes));
}

export const callback = (req, res) => {
    const error = req.query.error
    const code = req.query.code
    const state = req.query.state


}