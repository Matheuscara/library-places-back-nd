const axios = require('axios')
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

    const places = response.data.results.map(( element ) => {
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
    
    return places
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

    response.data.results.map((element) =>
      element.types.map((type) => {
        if (!categories.find((category) => category === type)) {
          categories.push(type)
        }
      })
    )

    return categories
  } catch (e) {
    return e
  }
}

async function getPlaceById(placeId) {
  try {
    const { data } = await axios.get(
      `${UrlGoogleMapsApi}place_id=${placeId}&key=${process.env.GOOGLE_PLACES_KEY}`
    )

    return {
      name: data.result.formatted_address,
      location: {
        latitude: data.result.geometry.location.lat,
        longitude: data.result.geometry.location.lng
      },
    }
  } catch (e) {
    return e
  }
}

module.exports = { getAllPlaces, getAllCategory, getPlaceById }
