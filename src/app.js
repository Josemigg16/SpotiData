// app.js
import path from 'path';
import express from 'express'
import session from 'express-session';
import morgan from 'morgan'

import { Login, callback } from './routes/auth.routes.js'
const app = express()

app.use(session({
    secret: 'yolavienuntaxi',
    resave: false,
    saveUninitialized: true
  }));

app.use(express.static(path.resolve('./src/public/')));
const htmlPath  = path.resolve('./src/public/html');

app.use(morgan('dev'))
app.get('/', (req, res) => {

  if(!req.session.token) {
    return res.sendFile('login.html', { root: htmlPath});
  }
  return res.sendFile('index.html', { root: htmlPath});

});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})

app.get('/api/session', (req, res) => {
    res.json(req.session);
  });

app.get('/login', Login)

app.get('/callback', callback)


export default app