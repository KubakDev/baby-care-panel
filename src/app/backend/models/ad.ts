/* tslint:disable */
/* eslint-disable */
import { AdPlacement } from './ad-placement';
import { Priority } from './priority';
export interface Ad {
  adPlacement?: AdPlacement;
  description?: null | string;
  id?: string;
  images?: null | Array<string>;
  priority?: Priority;
  reach?: number;
  title?: string;
  videos?: null | Array<string>;
}
