import express from 'express'
import morgan from 'morgan'
import { fileURLToPath } from 'url'
import {Login} from './routes/auth.routes'

const app = express()
app.use(morgan('dev'))
app.get('/', (req, res) => {
    res.sendFile('public/index.html', { root: fileURLToPath(import.meta.url).replace('app.js', '') })
})

app.get('/Login', Login)

export default app