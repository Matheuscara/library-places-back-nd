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

const GetPlacesCategory = async (req, res) => {
  const { latitude, longitude, radius } = req.body

  const response = await PlacesRequests.getAllCategory(
    latitude,
    longitude,
    radius
  )

  return res.status(200).json(response)
}

const GetPlaceByIdLocation = async (req, res) => {
  const { id } = req.params

  const response = await PlacesRequests.getPlaceById(id)

  return res.status(200).json(response)
}

PlacesRouter.get('/all', GetPlaces)

PlacesRouter.get('/:id', GetPlaceByIdLocation)

PlacesRouter.get('/category', GetPlacesCategory)

module.exports = PlacesRouter
