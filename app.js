import express from 'express'
import bodyParser from 'body-parser'
import Redis from 'ioredis'

const app = express()
const port = 3001

const redis = new Redis(6379)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/clear_board_data', (req, res) => {
    // TODO
    res.send('Data cleared.')
})

app.post('/upload_board_data', (req, res, next) => {
    // TODO
    res.send('Data synced.')
})

app.get('/download_board_data', (req, res) => {
    // TODO
    res.send('Data synced.')
})

app.get('/', (req, res) => {
    res.render('nullboard', { message: 'Syncing from server...' })
})

app.get('/local_storage', (req, res) => {
    res.render('local_storage')
})

await redis.set('nullboard', 'v1.0.0')

console.log(`Listening on port ${port}...`)
app.listen(port)
