import { Express } from 'express'
import CustomerService from '../../business/abstract/CustomerService'
import { Inject } from 'typescript-ioc'
import Controller from '../../core/web/Controller'
import { Request, Response } from '../../core/web/ActionProps'

export class CustomerController extends Controller {
  @Inject
  private customerService: CustomerService

  constructor(app: Express) {
    super(app)
  }

  configureRoutes(): void {
    this.app.get('/customers', this.getCustomers.bind(this))
  }

  getCustomers(req: Request, res: Response) {
    res.send(this.customerService.getCustomers())
  }
}
