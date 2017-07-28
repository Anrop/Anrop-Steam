require('dotenv').config()

if (process.env.NEW_RELIC_LICENSE_KEY && process.env.NEW_RELIC_APP_NAME) {
  require('newrelic')
}

const express = require('express')
const cors = require('cors')
const SteamWorkshop = require('steam-workshop')

const steamWorkshop = new SteamWorkshop()

const app = express()
app.use(cors())

app.get('/', function (req, res) {
  res.send('hello world!')
})

app.use('/item', require('./item')(steamWorkshop))
app.use('/search', require('./search')(steamWorkshop))

app.listen(process.env.PORT || 3000)
