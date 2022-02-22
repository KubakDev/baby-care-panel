/* tslint:disable */
/* eslint-disable */
import { Question } from './question';
export interface UpdateSurveyRequest {
  questions?: null | Array<Question>;
  tags?: null | Array<string>;
  title?: null | string;
}
