/**
 * Server
 */

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./lib/router')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.set('views', path.join(__dirname, '/views'))
app.engine('.html', require('ejs').__express)
app.set('view engine', 'html')

app.use('/', router)

if (!module.parent) {
  app.listen(process.env.PORT || 3000)
}

module.exports = app
