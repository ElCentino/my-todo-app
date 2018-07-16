import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import homeRouter from './routes'

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}))
app.use("/statics", express.static('./public/'))

app.use('/', homeRouter)

export default app