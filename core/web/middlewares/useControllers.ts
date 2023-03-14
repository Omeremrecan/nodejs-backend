import Controller from '../Controller'
import { Express } from 'express'

export default (controllers: typeof Controller[], app: Express) => {
  controllers.forEach((Controller) => new Controller(app))
}
