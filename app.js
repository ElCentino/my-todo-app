const express = require('express')
const bodyParser = require('body-parser')
const  cookieParser = require('cookie-parser')
const  homeRouter = require('./routes')

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}))
app.use("/statics", express.static('./public/'))

app.use('/', homeRouter)

module.exports = app