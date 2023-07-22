import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Typography } from "@mui/material";

import { fetchSingleComment } from '../../../store/actions/reviews.action';
import { CommentRootState } from '../../../store/types/state.types';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

interface Comment {
  name: string;
  email: string;
  body: string;
}

const CommentSingle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
  const comment = useSelector<CommentRootState, Comment | null>((state) => state.commentsReducer.singleComment);

  useEffect(() => {
    if (id) {
      const commentId = parseInt(id, 10);
      dispatch(fetchSingleComment(commentId));
    }
  }, [dispatch, id]);

  if (!comment) {
    return <div>Loading...</div>;
  }

  return (
    <div className="commentWrapper p-5">
      <div className="text-center d-flex justify-content-center flex-column mb-4">
        <h2 className="text-center mb-4 p-3">Детали комментария</h2>
        {comment.name && (
          <Typography variant="subtitle1" className="mb-3">
            <strong>Имя:</strong> {comment.name.charAt(0).toUpperCase() + comment.name.slice(1)}
          </Typography>
        )}
        {comment.email && (
          <Typography variant="body2" className="mb-3">
            <strong>Email:</strong> {comment.email}
          </Typography>
        )}
        {comment.body && (
          <Typography variant="body1" className="mb-2">
            <strong>Текст:</strong> {comment.body.charAt(0).toUpperCase() + comment.body.slice(1)}
          </Typography>
        )}
      </div>
      <Link to="/reviews">Back</Link>
    </div>
  );
};

export default CommentSingle;
