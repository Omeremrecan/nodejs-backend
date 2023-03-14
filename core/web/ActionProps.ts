import {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express-serve-static-core'
import { ParsedQs } from 'qs'

export type Request = ExpressRequest<
  {},
  any,
  any,
  ParsedQs,
  Record<string, any>
>
export type Response = ExpressResponse<any, Record<string, any>, number>

type ActionProps = {
  req: ExpressRequest<{}, any, any, ParsedQs, Record<string, any>>
  res: ExpressResponse<any, Record<string, any>, number>
}

export default ActionProps
