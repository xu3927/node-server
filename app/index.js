const express = require('express')

// Constants
const PORT = 3001
const HOST = '0.0.0.0'

// App
const app = express()
app.all('/*', (req, res) => {
    console.log(req.url)
    res.send('Hello remote world!\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
