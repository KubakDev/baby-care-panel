/* tslint:disable */
/* eslint-disable */
import { Gender } from './gender';
export interface UpdateChildRequest {
  birthdate?: null | string;
  born?: null | boolean;
  diseases?: null | Array<string>;
  displayName?: null | string;
  gender?: Gender;
}
