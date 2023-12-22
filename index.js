const express = require('express')
require('dotenv').config();
require("./src/config/db")

const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const userRouter = require("./src/routers/router")

app.use(bodyParser.json())
app.use("/", userRouter)
app.get('/', (req, res) => {
    res.send('Users')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
