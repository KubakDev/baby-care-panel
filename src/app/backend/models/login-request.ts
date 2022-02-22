/* tslint:disable */
/* eslint-disable */
import { Audience } from './audience';
export interface LoginRequest {
  audience: Audience;
  password: string;
  username: string;
}
