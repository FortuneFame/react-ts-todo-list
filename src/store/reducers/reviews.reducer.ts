import { FETCH_COMMENTS, FETCH_SINGLE_COMMENT } from "../constants";
import { CommentsActionTypes, SingleCommentActionTypes, ReviewComment, ReviewSingleComment } from "../types/reviews.types";

interface CommentsState {
  comments: ReviewComment[];
  singleComment: ReviewSingleComment | null; 
}

const initialState: CommentsState = {
  comments: [],
  singleComment: null, 
};

const commentsReducer = (state = initialState, action: CommentsActionTypes | SingleCommentActionTypes): CommentsState => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case FETCH_SINGLE_COMMENT:
      return {
        ...state,
        singleComment: action.payload,
      };
    default:
      return state;
  }
};

export default commentsReducer; 
