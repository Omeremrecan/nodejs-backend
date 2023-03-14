import LogAspect from '../../core/aspects/LogAspect'
import CustomerService from '../abstract/CustomerService'

export default class CustomerManager implements CustomerService {
  
  @LogAspect
  public getCustomers(): Customer[] {
    return [
      { id: 1, name: 'Ömer' },
      { id: 2, name: 'Emre' },
    ]
  }
}
