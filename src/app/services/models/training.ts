/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { Feedback } from '../models/feedback';
import { Segment } from '../models/segment';
export interface Training {
  activityType?: string;
  feedback?: Feedback;
  scheduledAt?: string;
  segmentList?: Array<Segment>;
  trainingId?: number;
  workoutName?: string;
}