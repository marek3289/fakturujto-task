import { Request } from "express"
import { JwtPayload } from 'jsonwebtoken';

declare module "express" { 
  export interface Request {
    user?: JwtPayload
  }
}

declare module 'xss-clean' {
  const value: Function;
  export default value;
}
