// vercel needs this for the server
const express = require('express')
const app = express()
const bodyParser  = require('body-parser');
const cors = require('cors');
const colorDiffs = require("../helpers/helpers")

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/compareText', async (req, res) => {
    var firstText = req.body.firstText
    var secondText = req.body.secondText
    const regex = /(<([^>]+)>)/gi;
    console.log('the first text', firstText, '\n', 'the second text', secondText)
    var text1 = firstText.replace(regex, "").split(' ')
    var text2 = secondText.replace(regex, "").split(' ')  
    var diff = colorDiffs(text1, text2)
    console.log('the diff', diff)
    res.send(diff)
})

app.post('/sendText/:id', async(req, res) => {
    console.log('the idea', req.params.id)
    res.send('seeend')
})
app.use('/', (req, res) => {
    res.send("server is running")
})

app.listen(5000, console.log("server has started on port 5000"))
