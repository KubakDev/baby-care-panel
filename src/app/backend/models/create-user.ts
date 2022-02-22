/* tslint:disable */
/* eslint-disable */
import { PregnancyState } from './pregnancy-state';
import { Role } from './role';
export interface CreateUser {
  displayName: string;
  gender?: string;
  password: string;
  pregnancyState?: PregnancyState;
  role: Role;
  username: string;
}
