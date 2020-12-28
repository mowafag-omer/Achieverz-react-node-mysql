const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const flRoutes = require('./routes/freelancerRoutes')
const emRoutes = require('./routes/employerRoutes')
const jobRoutes = require('./routes/jobRoutes')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/user', userRoutes)
app.use('/fl', flRoutes)
app.use('/em', emRoutes)
app.use('/job', jobRoutes)

app.listen(3000, () => console.log(`listening at http://localhost:3000`))