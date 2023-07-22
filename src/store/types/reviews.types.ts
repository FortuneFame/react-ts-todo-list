import { FETCH_COMMENTS, FETCH_SINGLE_COMMENT } from "../constants";

export interface ReviewComment {
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface ReviewSingleComment {
  id: number;
  name: string;
  email: string;
  body: string;
}

interface FetchCommentsAction {
  type: typeof FETCH_COMMENTS;
  payload: ReviewComment[];
}

interface FetchSingleCommentAction {
  type: typeof FETCH_SINGLE_COMMENT;
  payload: ReviewComment;
}

export type CommentsActionTypes = FetchCommentsAction;
export type SingleCommentActionTypes = FetchSingleCommentAction;
