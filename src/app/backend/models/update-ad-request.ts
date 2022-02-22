/* tslint:disable */
/* eslint-disable */
import { AdPlacement } from './ad-placement';
import { Priority } from './priority';
export interface UpdateAdRequest {
  adPlacement?: AdPlacement;
  description?: null | string;
  images?: null | Array<string>;
  priority?: Priority;
  title?: null | string;
  videos?: null | Array<string>;
}
