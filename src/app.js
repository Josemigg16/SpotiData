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
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(session({
    secret: 'yolavienuntaxi',
    resave: false,
    saveUninitialized: true
  }));

app.use(morgan('dev'))
app.get('/', (req, res) => {
    if(!req.session.token) {
        return res.render('login')
    }
    
    return res.render('index')
})

app.get('/api/session', (req, res) => {
    res.json(req.session);
  });

app.get('/login', Login)

app.get('/callback', callback)


export default app