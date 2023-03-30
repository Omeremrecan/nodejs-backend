import Customer from "../../entities/Customer";

export default abstract class CustomerService {
  abstract getCustomers(): Promise<Customer[]>
  abstract saveCustomer(customer: Customer): Promise<Customer>
}
