import { Advice, Aspect, AspectContext, UseAspect } from 'ts-aspect'

class LogAspect implements Aspect {
  execute(ctx: AspectContext): void {
    console.log(ctx);
  }
}

export default UseAspect(Advice.Before, LogAspect);