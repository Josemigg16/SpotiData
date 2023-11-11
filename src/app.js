// app.js
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express'
import session from 'express-session';
import morgan from 'morgan'

import { Login, callback } from './routes/auth.routes.js'
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express()

app.use(session({
    secret: 'yolavienuntaxi',
    resave: false,
    saveUninitialized: true
  }));

app.use(express.static(path.resolve('./src/public')));
const publicPath  = path.resolve('./src/public');

app.use(morgan('dev'))
app.get('/', (req, res) => {
    if(!req.session.token) {
        return res.sendFile('login.html', { root: publicPath})
    }
    
    return res.sendFile('index.html', { root: publicPath})
})

app.get('/api/session', (req, res) => {
    res.json(req.session);
  });

app.get('/login', Login)

app.get('/callback', callback)


export default app