import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import config from './config.js'

const PORT = 5000
const {login, pass} = config
const DB_URL = `mongodb+srv://${login}:${pass}@cluster0.hdehi.mongodb.net/userdata`
const app = express()

app.use(express.json())
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        app.listen(PORT, () => console.log('server started'))
    } catch (error) {
        console.log(error);
    }
}
startApp()