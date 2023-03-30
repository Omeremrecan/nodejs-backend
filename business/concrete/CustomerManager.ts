import LogAspect from '../../core/aspects/LogAspect'
import CustomerService from '../abstract/CustomerService'
import Customer from "../../entities/Customer"

export default class CustomerManager implements CustomerService {
  @LogAspect
  public async saveCustomer(customer: Customer): Promise<Customer> {
    return customer;
  }
  
  @LogAspect
  public async getCustomers(): Promise<Customer[]> {
    return [
      { id: 1, name: 'Ömer' },
      { id: 2, name: 'Emre' },
    ]
  }
}
