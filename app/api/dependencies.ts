import CustomerService from "../business/abstract/CustomerService";
import CustomerManager from "../business/concrete/CustomerManager";
import { IoCContainer } from "../../core/web/middlewares/useIoC";

export const loadModule = (container: IoCContainer) => {
  container.Add(CustomerService, CustomerManager).AsSingleton();
}