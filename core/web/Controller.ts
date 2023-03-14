import { Express } from 'express'

export default class Controller {
  protected app: Express

  constructor(app: Express) {
    this.app = app
    this.configureRoutes()
  }

  configureRoutes(): void {}
}
