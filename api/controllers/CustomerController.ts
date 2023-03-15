import { Express } from 'express'
import CustomerService from '../../business/abstract/CustomerService'
import { Inject } from 'typescript-ioc'
import Controller from '../../core/web/Controller'
import { Request, Response } from '../../core/web/ActionProps'
import ControllerProps from '../../core/web/types/ControllerProps'

export class CustomerController extends Controller {
  @Inject
  private customerService: CustomerService

  constructor(props: ControllerProps) {
    super(props)

    this.addEndpoint('/customers', {
      get: this.getCustomers,
      post: this.saveCustomer,
    })
  }

  public getCustomers(req: Request, res: Response) {
    res.send(this.customerService.getCustomers())
  }

  public saveCustomer(req: Request, res: Response) {
    res.send(this.customerService.saveCustomer(req.body))
  }
}
