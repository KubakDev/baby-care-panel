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

import { CreateSurveyRequest } from '../models/create-survey-request';
import { Survey } from '../models/survey';
import { UpdateSurveyRequest } from '../models/update-survey-request';

@Injectable({
  providedIn: 'root',
})
export class SurveyService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation listSurveys
   */
  static readonly ListSurveysPath = '/v1/surveys';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listSurveys()` instead.
   *
   * This method doesn't expect any request body.
   */
  listSurveys$Response(params?: {
    Limit?: number;
    SortDescending?: boolean;
    SearchText?: string;
  }): Observable<StrictHttpResponse<Array<Survey>>> {

    const rb = new RequestBuilder(this.rootUrl, SurveyService.ListSurveysPath, 'get');
    if (params) {
      rb.query('Limit', params.Limit, {});
      rb.query('SortDescending', params.SortDescending, {});
      rb.query('SearchText', params.SearchText, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Survey>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listSurveys$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listSurveys(params?: {
    Limit?: number;
    SortDescending?: boolean;
    SearchText?: string;
  }): Observable<Array<Survey>> {

    return this.listSurveys$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Survey>>) => r.body as Array<Survey>)
    );
  }

  /**
   * Path part for operation createSurvey
   */
  static readonly CreateSurveyPath = '/v1/surveys';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createSurvey()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSurvey$Response(params?: {
    body?: CreateSurveyRequest
  }): Observable<StrictHttpResponse<Survey>> {

    const rb = new RequestBuilder(this.rootUrl, SurveyService.CreateSurveyPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Survey>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createSurvey$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSurvey(params?: {
    body?: CreateSurveyRequest
  }): Observable<Survey> {

    return this.createSurvey$Response(params).pipe(
      map((r: StrictHttpResponse<Survey>) => r.body as Survey)
    );
  }

  /**
   * Path part for operation getSurveyById
   */
  static readonly GetSurveyByIdPath = '/v1/surveys/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSurveyById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSurveyById$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Survey>> {

    const rb = new RequestBuilder(this.rootUrl, SurveyService.GetSurveyByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Survey>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSurveyById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSurveyById(params: {
    id: string;
  }): Observable<Survey> {

    return this.getSurveyById$Response(params).pipe(
      map((r: StrictHttpResponse<Survey>) => r.body as Survey)
    );
  }

  /**
   * Path part for operation updateSurvey
   */
  static readonly UpdateSurveyPath = '/v1/surveys/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateSurvey()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSurvey$Response(params: {
    id: string;
    body?: UpdateSurveyRequest
  }): Observable<StrictHttpResponse<Survey>> {

    const rb = new RequestBuilder(this.rootUrl, SurveyService.UpdateSurveyPath, 'put');
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
        return r as StrictHttpResponse<Survey>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateSurvey$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSurvey(params: {
    id: string;
    body?: UpdateSurveyRequest
  }): Observable<Survey> {

    return this.updateSurvey$Response(params).pipe(
      map((r: StrictHttpResponse<Survey>) => r.body as Survey)
    );
  }

}
