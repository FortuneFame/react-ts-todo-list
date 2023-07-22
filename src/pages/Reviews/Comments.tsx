import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Card, ListItemButton, ListItemText } from "@mui/material";
import Pagination from '@mui/material/Pagination';

import { fetchComments } from '../../store/actions/reviews.action';
import { CommentRootState } from '../../store/types/state.types';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

interface Comment {
  id: number;
  name: string;
}

const COMMENTS_PER_PAGE = 10;

const Comments: React.FC = () => {
  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
  const comments = useSelector<CommentRootState, Comment[]>((state) => state.commentsReducer.comments);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(comments.length / COMMENTS_PER_PAGE);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  if (!comments) {
    return <div>Loading...</div>;
  }

  const handleCommentClick = (id: number) => {
    navigate(`/reviews/${id}`);
  };

  const handleChangePage = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const commentsToShow = comments.slice((currentPage - 1) * COMMENTS_PER_PAGE, currentPage * COMMENTS_PER_PAGE);

  return (
    <div className="d-flex justify-content-center flex-wrap">
      {commentsToShow.map((comment) => (
        <Card key={comment.id} className="card m-3 p-3" style={{ width: '25%' }}>
          <ListItemButton onClick={() => handleCommentClick(comment.id)} className="text-center list-group-item">
            <ListItemText primary={comment.name.charAt(0).toUpperCase() + comment.name.slice(1)} />
          </ListItemButton>
        </Card>
      ))}
      <Pagination count={totalPages} page={currentPage} onChange={handleChangePage} />
      <Link to="/">Back</Link>
    </div>
  );
};

export default Comments;
