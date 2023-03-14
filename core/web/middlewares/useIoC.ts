import { Config, Container, Scope } from 'typescript-ioc'

class Added {
  private item: Config

  constructor(item: Config){
    this.item = item;
  }

  AsSingleton(){
    this.item.scope(Scope.Singleton);
  }
}

export class IoCContainer {
  Add<TAbstarct extends Function, TConcrete extends TAbstarct>(
    abstract: TAbstarct,
    concrete: TConcrete,
  ): Added {
    return new Added(Container.bind(abstract).to(concrete))   
  }
}

var manager = new IoCContainer()

export default (callback: (container: IoCContainer) => void) => {
  callback(manager)
}
