/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CreateQuestion } from '../models/create-question';
import { Question } from '../models/question';
import { UpdateQuestionRequest } from '../models/update-question-request';

@Injectable({
  providedIn: 'root',
})
export class QuestionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation listQuestions
   */
  static readonly ListQuestionsPath = '/v1/questions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listQuestions()` instead.
   *
   * This method doesn't expect any request body.
   */
  listQuestions$Response(params: {
    SurveyId: string;
    Limit?: number;
  }): Observable<StrictHttpResponse<Array<Question>>> {

    const rb = new RequestBuilder(this.rootUrl, QuestionService.ListQuestionsPath, 'get');
    if (params) {
      rb.query('SurveyId', params.SurveyId, {});
      rb.query('Limit', params.Limit, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Question>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listQuestions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listQuestions(params: {
    SurveyId: string;
    Limit?: number;
  }): Observable<Array<Question>> {

    return this.listQuestions$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Question>>) => r.body as Array<Question>)
    );
  }

  /**
   * Path part for operation createQuestion
   */
  static readonly CreateQuestionPath = '/v1/questions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createQuestion()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createQuestion$Response(params?: {
    body?: CreateQuestion
  }): Observable<StrictHttpResponse<Question>> {

    const rb = new RequestBuilder(this.rootUrl, QuestionService.CreateQuestionPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Question>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createQuestion$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createQuestion(params?: {
    body?: CreateQuestion
  }): Observable<Question> {

    return this.createQuestion$Response(params).pipe(
      map((r: StrictHttpResponse<Question>) => r.body as Question)
    );
  }

  /**
   * Path part for operation getQuestionById
   */
  static readonly GetQuestionByIdPath = '/v1/questions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQuestionById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuestionById$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Question>> {

    const rb = new RequestBuilder(this.rootUrl, QuestionService.GetQuestionByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Question>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getQuestionById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuestionById(params: {
    id: string;
  }): Observable<Question> {

    return this.getQuestionById$Response(params).pipe(
      map((r: StrictHttpResponse<Question>) => r.body as Question)
    );
  }

  /**
   * Path part for operation updateQuestion
   */
  static readonly UpdateQuestionPath = '/v1/questions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateQuestion()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateQuestion$Response(params: {
    id: string;
    body?: UpdateQuestionRequest
  }): Observable<StrictHttpResponse<Question>> {

    const rb = new RequestBuilder(this.rootUrl, QuestionService.UpdateQuestionPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Question>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateQuestion$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateQuestion(params: {
    id: string;
    body?: UpdateQuestionRequest
  }): Observable<Question> {

    return this.updateQuestion$Response(params).pipe(
      map((r: StrictHttpResponse<Question>) => r.body as Question)
    );
  }

}
