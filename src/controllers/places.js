const { Router } = require('express')

const PlacesRouter = Router()

// services imports
const PlacesRequests = require('../services/PlacesRequests')

const GetPlaces = async (req, res) => {
  const { latitude, longitude, radius, type } = req.body

  const { message, status } = await PlacesRequests.getAllPlaces(
    latitude,
    longitude,
    radius,
    type
  )

  return res.status(status).json(message)
}

const GetPlacesCategory = async (req, res) => {
  const { latitude, longitude, raio } = req.params

  const { message, status } = await PlacesRequests.getAllCategory(
    latitude,
    longitude,
    raio
  )

  return res.status(status).json(message)
}

const GetPlaceByIdLocation = async (req, res) => {
  const { id } = req.params

  const { message, status } = await PlacesRequests.getPlaceById(id)

  return res.status(status).json(message)
}

PlacesRouter.get('/all', GetPlaces)

PlacesRouter.get('/categories/:latitude/:longitude/:raio', GetPlacesCategory)

PlacesRouter.get('/:id', GetPlaceByIdLocation)

module.exports = PlacesRouter
