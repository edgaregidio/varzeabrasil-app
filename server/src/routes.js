const express = require('express')
const newsController = require('./api/newsController')
const teamsController = require('./api/teamsController')
const tableArenaSoccerController = require('./api/tableArenaSoccerController')

const routes = express.Router()

routes.get('/news', newsController.index)
routes.get('/teams', teamsController.index)
routes.get('/arenasoccer', tableArenaSoccerController.index)

module.exports = routes
