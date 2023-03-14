import express from 'express'
import { CustomerController } from '../api/controllers/CustomerController'
import useControllers from '../core/web/middlewares/useControllers'
import useIoC from '../core/web/middlewares/useIoC'
import { loadModule } from './dependencies'

const app = express()
const port = 7001

useIoC((container) => loadModule(container))
useControllers([CustomerController], app)

app.listen(port, () => {
  console.log(`Application started on ${port} port`)
})
