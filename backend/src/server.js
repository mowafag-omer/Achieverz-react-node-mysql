const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/user', userRoutes)

app.listen(3000, () => console.log(`listening at http://localhost:3000`))