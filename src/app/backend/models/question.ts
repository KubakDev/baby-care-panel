/* tslint:disable */
/* eslint-disable */
import { QuestionType } from './question-type';
export interface Question {
  id?: string;
  questionType?: QuestionType;
  surveyId?: string;
  title?: string;
}
