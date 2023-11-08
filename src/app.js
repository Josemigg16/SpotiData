import express from 'express'
import morgan from 'morgan'
import { fileURLToPath } from 'url'
import { Login, callback } from './routes/auth.routes.js'

const app = express()
app.use(morgan('dev'))
app.get('/', (req, res) => {
    res.sendFile('public/index.html', { root: fileURLToPath(import.meta.url).replace('app.js', '') })
})

app.get('/login', Login)
app.get('/callback', callback)

export default app