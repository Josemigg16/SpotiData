import express from 'express'
import session from 'express-session';
import morgan from 'morgan'
import { Login, callback } from './routes/auth.routes.js'

const app = express()

app.set('view engine', 'ejs');
app.use(session({
    secret: 'yolavienuntaxi',
    resave: false,
    saveUninitialized: true
  }));

app.use(morgan('dev'))
app.get('/', (req, res) => {
    if(!req.session.token) {
        //res.sendFile('public/index.html', { root: fileURLToPath(import.meta.url).replace('app.js', '') })
        return res.render('login')
    }
    
    return res.render('index')
})

app.get('/login', Login)

app.get('/callback', callback)


export default app