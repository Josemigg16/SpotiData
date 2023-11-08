import express from 'express'
import morgan from 'morgan'
import { fileURLToPath } from 'url'

const app = express()
app.use(morgan('dev'))
app.get('/', (req, res) => {
    res.sendFile('public/index.html', { root: fileURLToPath(import.meta.url).replace('app.js', '') })
})

export default app