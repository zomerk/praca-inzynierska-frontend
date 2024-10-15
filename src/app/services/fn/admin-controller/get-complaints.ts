/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageComplaint } from '../../models/page-complaint';

export interface GetComplaints$Params {
  page?: number;
  size?: number;
  sortBy?: string;
  sortDir?: string;
}

export function getComplaints(http: HttpClient, rootUrl: string, params?: GetComplaints$Params, context?: HttpContext): Observable<StrictHttpResponse<PageComplaint>> {
  const rb = new RequestBuilder(rootUrl, getComplaints.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
    rb.query('sortBy', params.sortBy, {});
    rb.query('sortDir', params.sortDir, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageComplaint>;
    })
  );
}

getComplaints.PATH = '/admin/complaints';