const axios = require('axios')
require('dotenv/config')

const UrlGoogleApi =
  'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'

async function getAllPlaces(latitude, longitude, radius, type) {
  try {
    const response = await axios.get(
      `${UrlGoogleApi}location=${latitude}%2C${longitude}&radius=${radius}&key=${
        process.env.GOOGLE_PLACES_KEY
      }${type && '&type=' + type}`
    )

    return response.data
  } catch (e) {
    return e
  }
}

module.exports = { getAllPlaces }
