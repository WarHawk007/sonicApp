const express = require('express');
var bodyParser = require('body-parser')
const getDetails = require('./trax')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    return res.render('index', {
        details: null
    })
})

app.post('/details', (req, res) => {
    getDetails(req.body.start, req.body.end).then(details => {
        res.render('index', {
            details
        })
    }).catch(err => {
        console.log(err)
    })
})

app.listen(process.env.PORT, () => {
    console.log('listening on port 3000')
})