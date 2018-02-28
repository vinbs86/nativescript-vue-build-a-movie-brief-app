const http = require("http")
const baseUrl = 'https://api.douban.com'

module.exports = {
  getComingList () {
    return http.getJSON(`${baseUrl}/v2/movie/coming_soon`)
  },
  getHotList () {
    return http.getJSON(`${baseUrl}/v2/movie/in_theaters`)
  }
}
