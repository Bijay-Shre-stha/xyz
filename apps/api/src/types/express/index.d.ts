import { User } from "../../models";

export {};

declare global {
  namespace Express {
    export interface Request {
      user?: User | null;
    }
  }
}
