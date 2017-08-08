'use strict'

var http = require('http')
var url = require('url')

const ADDS_BASE_URL = 'http://aviationweather.gov/adds/dataserver_current/httpparam?'

http.createServer()
  .on('request', (req, res) => {

    //extract query string
    var query = url.parse(req.url).query
    //enable cors
    res.setHeader("Access-Control-Allow-Origin", "*")
    //pipe request to ADDS data server
    http.get(ADDS_BASE_URL + query, (resp) => {
      console.log(resp)
      resp.pipe(res)
    })
  })
  .listen(8080)
