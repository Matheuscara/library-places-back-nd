const express = require('express')
const rescue = require('express-rescue')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 3001

// constroller 
const placesController = require('./src/controllers/places')

app.use(express.json())
app.use(cors())

app.use('/places', rescue(placesController))

app.listen(PORT, () => console.log('Example app listening on port:', PORT))
