/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
import { UserStatus } from './user-status';
export interface UpdateUser {
  address?: Address;
  displayName?: null | string;
  password?: null | string;
  status?: UserStatus;
}
