const { Router } = require('express')

const PlacesRouter = Router()

// services imports
const PlacesRequests = require('../services/PlacesRequests')

const GetPlaces = async (req, res) => {
  const { latitude, longitude, radius, type } = req.body

  const response = await PlacesRequests.getAllPlaces(
    latitude,
    longitude,
    radius,
    type
  )

  return res.status(200).json(response)
}

PlacesRouter.get('/', GetPlaces)

module.exports = PlacesRouter
