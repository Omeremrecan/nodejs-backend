import LogAspect from '../../core/aspects/LogAspect'
import CustomerService from '../abstract/CustomerService'
import Customer from "../../entities/Customer"

export default class CustomerManager implements CustomerService {
  @LogAspect
  public saveCustomer(customer: Customer): Customer {
    return customer;
  }
  
  @LogAspect
  public getCustomers(): Customer[] {
    return [
      { id: 1, name: 'Ömer' },
      { id: 2, name: 'Emre' },
    ]
  }
}
