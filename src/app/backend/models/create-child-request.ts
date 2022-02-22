/* tslint:disable */
/* eslint-disable */
import { Gender } from './gender';
export interface CreateChildRequest {
  birthdate?: null | string;
  born: boolean;
  diseases?: Array<string>;
  displayName: string;
  gender?: Gender;
  parentId: string;
}
