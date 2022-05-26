
const switchResponseAxiosRequest = (response) => {
  switch (response.data.status) {
    case 'INVALID_REQUEST':
      return {
        message: 'INVALID_REQUEST',
        status: 400
      }
    case 'REQUEST_DENIED':
      return {
        message: 'REQUEST_DENIED',
        status: 403,
      }
    default:
      return {
        message: 'INVALID_REQUEST',
        status: 500,
      }
  }
}

module.exports = { switchResponseAxiosRequest }