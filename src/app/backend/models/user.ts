/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
import { Role } from './role';
import { UserStatus } from './user-status';
export interface User {
  address?: Address;
  createdAt?: null | string;
  diseases?: Array<string>;
  displayName?: string;
  id?: string;
  isVerified?: boolean;
  phoneNumber?: null | string;
  role?: Role;
  status?: UserStatus;
  username?: string;
}
