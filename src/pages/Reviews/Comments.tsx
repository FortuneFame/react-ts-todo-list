import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Box, Card, CardContent, Grid, Typography, Button, Rating } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { deepOrange, deepPurple } from '@mui/material/colors';

import { fetchComments } from '../../store/actions/reviews.action';
import { CommentRootState } from '../../store/types/state.types';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import Loader from '../../components/Atoms/Loader/Loader';

interface Comment {
  id: number;
  name: string;
}

const COMMENTS_PER_PAGE = 12;

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
    return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Loader /></div>;
  }

  const handleCommentClick = (id: number) => {
    navigate(`/reviews/${id}`);
  };

  const handleChangePage = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const commentsToShow = comments.slice((currentPage - 1) * COMMENTS_PER_PAGE, currentPage * COMMENTS_PER_PAGE);

  return (
    <Grid p={2} container justifyContent="center" spacing={2}>
      {commentsToShow.map((comment, index) => (
        <Grid style={{ cursor: 'pointer', backgroundColor: 'none' }} item xs={12} sm={6} md={4} lg={4} key={comment.id}>
          <Card
            sx={{
              minWidth: 200,
              height: 200,
              backgroundColor: 'transparent',
              '&:hover': {
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
                transform: 'scale(1.05)',
              },
            }}
            onClick={() => handleCommentClick(comment.id)}
          >
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Avatar 
                  sx={{ bgcolor: index % 2 === 0 ? deepOrange[600] : deepPurple[300], width: 40, height: 40, fontSize: '25px' }}
                >
                  {comment.name[0].toUpperCase()}
                </Avatar>
                <Typography variant="body2" component="div" sx={{ textAlign: 'center' }}>
                  {comment.name.charAt(0).toUpperCase() + comment.name.slice(1)}
                </Typography>
                <Typography variant="body2" component="div" sx={{ textAlign: 'center' }}>
                  {new Date(new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 30))).toDateString()}
                </Typography>
                <Rating name="read-only" value={4 + Math.round(Math.random())} readOnly />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
          <Pagination count={totalPages} page={currentPage} onChange={handleChangePage} />
        </Box>
      </Grid>
      <Grid item xs={12} marginBottom={4}>
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
          <Button variant="contained" color="primary" component={Link} to="/">Back</Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Comments;
