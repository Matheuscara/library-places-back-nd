const axios = require('axios')
const { switchResponseAxiosRequest } = require('../util/Validations')
require('dotenv/config')

const UrlGoogleApi =
  'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'

const UrlGoogleMapsApi =
  'https://maps.googleapis.com/maps/api/place/details/json?'

async function getAllPlaces(latitude, longitude, radius, type) {
  try {
    const response = await axios.get(
      `${UrlGoogleApi}location=${latitude}%2C${longitude}&radius=${radius}&key=${
        process.env.GOOGLE_PLACES_KEY
      }${type && '&type=' + type}`
    )

    if (response.data.status !== 'OK')
      return switchResponseAxiosRequest(response)

    const places = response.data.results.map((element) => {
      return {
        name: element.name,
        place_id: element.place_id,
        categories: element.types,
        adress: element.vicinity,
        location: {
          lat: element.geometry.location.lat,
          lng: element.geometry.location.lng,
        },
      }
    })

    return {
      message: places,
      status: 200,
    }
  } catch (e) {
    return e
  }
}

async function getAllCategory(latitude, longitude, radius) {
  try {
    const categories = []

    const response = await axios.get(
      `${UrlGoogleApi}location=${latitude}%2C${longitude}&radius=${radius}&key=${process.env.GOOGLE_PLACES_KEY}`
    )

    if (response.data.status !== 'OK')
      return switchResponseAxiosRequest(response)

    response.data.results.map((element) =>
      element.types.map((type) => {
        if (!categories.find((category) => category === type)) {
          categories.push(type)
        }
      })
    )

    return {
      message: categories,
      status: 200,
    }
  } catch (e) {
    return e
  }
}

async function getPlaceById(placeId) {
  try {
    const response = await axios.get(
      `${UrlGoogleMapsApi}place_id=${placeId}&key=${process.env.GOOGLE_PLACES_KEY}`
    )

    if (response.data.status !== 'OK')
      return switchResponseAxiosRequest(response)

    return {
      message: {
        name: response.data.result.formatted_address,
        location: {
          latitude: response.data.result.geometry.location.lat,
          longitude: response.data.result.geometry.location.lng,
        },
      },
      status: 200,
    }
  } catch (e) {
    return e
  }
}

module.exports = { getAllPlaces, getAllCategory, getPlaceById }
