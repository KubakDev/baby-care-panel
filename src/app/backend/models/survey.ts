/* tslint:disable */
/* eslint-disable */
import { Question } from './question';
export interface Survey {
  createdAt?: string;
  id?: string;
  questions?: null | Array<Question>;
  responseNumber?: number;
  tags?: null | Array<string>;
  title?: string;
}
