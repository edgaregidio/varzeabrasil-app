const express = require('express')
const newsController = require('./controller/newsController')
const teamsController = require('./controller/teamsController')

const routes = express.Router()

routes.get('/news', newsController.index)
routes.get('/teams', teamsController.index)

module.exports = routes
