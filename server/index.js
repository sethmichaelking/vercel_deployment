// vercel needs this for the server
const express = require('express')
const app = express()

app.use('/', (req, res) => {
    res.send("server is running")
})

app.listen(5000, console.log("server has started on port 5000"))
