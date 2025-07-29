import { createServer } from 'http'
import express from 'express'
import { dirname } from 'path'

const app = express()
const server = createServer(app)

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to instagram clone!')
})

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})