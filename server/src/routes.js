const express = require('express')
const newsController = require('./api/newsController')
const teamsController = require('./api/teamsController')

const routes = express.Router()

routes.get('/news', newsController.index)
routes.get('/teams', teamsController.index)

module.exports = routes
