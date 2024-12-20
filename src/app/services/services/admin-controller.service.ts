/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { acceptTrainer } from '../fn/admin-controller/accept-trainer';
import { AcceptTrainer$Params } from '../fn/admin-controller/accept-trainer';
import { getComplaints } from '../fn/admin-controller/get-complaints';
import { GetComplaints$Params } from '../fn/admin-controller/get-complaints';
import { getUnverifiedTrainers } from '../fn/admin-controller/get-unverified-trainers';
import { GetUnverifiedTrainers$Params } from '../fn/admin-controller/get-unverified-trainers';
import { PageComplaint } from '../models/page-complaint';
import { PageTrainer } from '../models/page-trainer';
import { resolveComplaint } from '../fn/admin-controller/resolve-complaint';
import { ResolveComplaint$Params } from '../fn/admin-controller/resolve-complaint';

@Injectable({ providedIn: 'root' })
export class AdminControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `acceptTrainer()` */
  static readonly AcceptTrainerPath = '/admin/verify';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `acceptTrainer()` instead.
   *
   * This method doesn't expect any request body.
   */
  acceptTrainer$Response(params: AcceptTrainer$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return acceptTrainer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `acceptTrainer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  acceptTrainer(params: AcceptTrainer$Params, context?: HttpContext): Observable<void> {
    return this.acceptTrainer$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `resolveComplaint()` */
  static readonly ResolveComplaintPath = '/admin/complaint';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resolveComplaint()` instead.
   *
   * This method doesn't expect any request body.
   */
  resolveComplaint$Response(params: ResolveComplaint$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return resolveComplaint(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `resolveComplaint$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  resolveComplaint(params: ResolveComplaint$Params, context?: HttpContext): Observable<{
}> {
    return this.resolveComplaint$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getUnverifiedTrainers()` */
  static readonly GetUnverifiedTrainersPath = '/admin/unverified';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUnverifiedTrainers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUnverifiedTrainers$Response(params?: GetUnverifiedTrainers$Params, context?: HttpContext): Observable<StrictHttpResponse<PageTrainer>> {
    return getUnverifiedTrainers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUnverifiedTrainers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUnverifiedTrainers(params?: GetUnverifiedTrainers$Params, context?: HttpContext): Observable<PageTrainer> {
    return this.getUnverifiedTrainers$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageTrainer>): PageTrainer => r.body)
    );
  }

  /** Path part for operation `getComplaints()` */
  static readonly GetComplaintsPath = '/admin/complaints';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getComplaints()` instead.
   *
   * This method doesn't expect any request body.
   */
  getComplaints$Response(params?: GetComplaints$Params, context?: HttpContext): Observable<StrictHttpResponse<PageComplaint>> {
    return getComplaints(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getComplaints$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getComplaints(params?: GetComplaints$Params, context?: HttpContext): Observable<PageComplaint> {
    return this.getComplaints$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageComplaint>): PageComplaint => r.body)
    );
  }

}
