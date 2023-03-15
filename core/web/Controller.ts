import { Express } from 'express'
import MethodType from './types/MethodType'
import { Request, Response } from '../../core/web/ActionProps'
import ControllerProps from './types/ControllerProps'
import Routes from './types/Routes'
export default class Controller {
  protected app: Express

  constructor({ app }: ControllerProps) {
    this.app = app
  }

  protected addEndpoint(baseRoute: string, routes: Routes) {
    this.addRoute('GET', baseRoute, routes.get)
    this.addRoute('POST', baseRoute, routes.post)
    this.addRoute('DELETE', baseRoute, routes.delete)
  }

  protected addRoute(
    type: MethodType,
    path: string,
    action: (req: Request, res: Response) => void,
  ) {
    if (action) {
      switch (type) {
        case 'GET':
          this.app.get(path, action.bind(this))
          break
        case 'POST':
          this.app.post(path, action.bind(this))
          break
        case 'DELETE':
          this.app.delete(path, action.bind(this))
          break
        default:
          this.app.get(path, action.bind(this))
          break
      }
    }
  }
}
