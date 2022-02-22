/* tslint:disable */
/* eslint-disable */
import { Gender } from './gender';
export interface Child {
  birthdate?: null | string;
  born?: boolean;
  createdAt?: string;
  diseases?: Array<string>;
  displayName?: string;
  gender?: Gender;
  id?: string;
  parentId?: string;
  updatedAt?: string;
}
