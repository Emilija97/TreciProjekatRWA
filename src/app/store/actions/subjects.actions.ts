import { Action } from "@ngrx/store";

export enum SubjectActionTypes {
  FETCH_SUBJECTS = "[Subject] Fetch subjects",
  FETCH_SUBJECT = "[Subject] Fetch subject",
  FETCH_SUBJECTS_SUCCESS = "[Subject] Fetch subjects success",
  FETCH_SUBJECTS_FAILURE = "[Subject] Fetch subjects failure"
}

export class FetchSubjects implements Action {
  readonly type = SubjectActionTypes.FETCH_SUBJECTS;
  constructor(public payload: any) {}
}

export class FetchSubject implements Action {
  readonly type = SubjectActionTypes.FETCH_SUBJECT;
  constructor(public payload: any) {}
}

export class FetchSubjectsSuccess implements Action {
  readonly type = SubjectActionTypes.FETCH_SUBJECTS_SUCCESS;
  constructor(public payload: any) {}
}

export class FetchSubjectsFailure implements Action {
  readonly type = SubjectActionTypes.FETCH_SUBJECTS_FAILURE;
  constructor(public payload: any) {}
}

export type All =
  | FetchSubject
  | FetchSubjects
  | FetchSubjectsSuccess
  | FetchSubjectsFailure;
