/* tslint:disable */
/* eslint-disable */
import { QuestionType } from './question-type';
export interface CreateQuestion {
  questionType?: QuestionType;
  surveyId: string;
  title: string;
}
