// external modules
const request = require('request-promise-native')
const cors = require('cors')

// express setup
const express = require('express')
const app = express()
app.use(cors())
app.listen(1001)
console.log('running on port 1001...')

app.get('/*', function(req, res) {
    console.log(req.originalUrl.substring(1))
    request(req.originalUrl.substring(1)).then(function(val) {
        res.status(200).type('json').send(val)
    }, function(err) {
        res.status(200).send()
    })
})