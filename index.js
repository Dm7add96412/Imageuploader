const express = require('express')
const app = express()
const cors = require('cors')

const userUpload = require('./routes/index')
app.use(cors())

app.use('/user', userUpload)

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})