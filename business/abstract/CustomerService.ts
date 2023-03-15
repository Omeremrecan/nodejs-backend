import Customer from "../../entities/Customer";

export default abstract class CustomerService {
  abstract getCustomers(): Customer[]
  abstract saveCustomer(customer: Customer): Customer
}
