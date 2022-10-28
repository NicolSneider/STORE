const marksRouter = require('./marks.router')
const carsRouter = require('./cars.router')

function routerApi(app) {
app.use('/marks', marksRouter),
app.use('/cars', carsRouter)
}

module.exports = routerApi

