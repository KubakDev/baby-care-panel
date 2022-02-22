/* tslint:disable */
/* eslint-disable */
import { AuthTokenResult } from './auth-token-result';
import { User } from './user';
export interface LoginResult {
  auth?: AuthTokenResult;
  user?: User;
}
