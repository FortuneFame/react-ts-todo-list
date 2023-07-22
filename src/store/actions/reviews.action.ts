import { Dispatch } from 'redux';
import { CommentsActionTypes, ReviewComment, SingleCommentActionTypes } from '../types/reviews.types';
import { FETCH_COMMENTS, FETCH_SINGLE_COMMENT } from '../constants';

export const fetchComments = () => {
  return (dispatch: Dispatch<CommentsActionTypes>) => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data: ReviewComment[]) => {
        dispatch({
          type: FETCH_COMMENTS,
          payload: data,
        });
      })
      .catch((error) => {
        console.error('Ошибка при загрузке комментариев:', error);
      });
  };
};

export const fetchSingleComment = (id: number) => {
  return (dispatch: Dispatch<SingleCommentActionTypes>) => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((response) => response.json())
      .then((data: ReviewComment) => {
        dispatch({
          type: FETCH_SINGLE_COMMENT,
          payload: data,
        });
      })
      .catch((error) => {
        console.error('Ошибка при загрузке одного комментария:', error);
      });
  };
};

