import { Request, Response } from '../ActionProps'

type Routes = {
  get?: (req: Request, res: Response) => void
  post?: (req: Request, res: Response) => void
  delete?: (req: Request, res: Response) => void
}

export default Routes
