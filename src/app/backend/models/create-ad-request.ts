/* tslint:disable */
/* eslint-disable */
import { AdPlacement } from './ad-placement';
import { Priority } from './priority';
export interface CreateAdRequest {
  adPlacement?: AdPlacement;
  description?: null | string;
  images?: null | Array<string>;
  priority?: Priority;
  title?: string;
  videos?: null | Array<string>;
}
