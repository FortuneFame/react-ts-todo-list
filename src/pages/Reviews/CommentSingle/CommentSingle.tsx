import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Typography, Avatar, Button, Grid } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

import { fetchSingleComment } from '../../../store/actions/reviews.action';
import { CommentRootState } from '../../../store/types/state.types';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import Loader from '../../../components/Atoms/Loader/Loader';

interface Comment {
  name: string;
  email: string;
  body: string;
}

const defaultAvatar = 'path-to-your-default-avatar';

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
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Loader />
      </Box>
    );
  }

  return (
    <Box sx={{ p: { xs: 2, sm: 4, md: 5 }, textAlign: 'center' }}>
      <Box sx={{ width: { xs: '90%', sm: '80%', md: '60%', lg: '40%' }, mx: 'auto' }}>
        <Avatar src={defaultAvatar} sx={{ width: 80, height: 80, mb: 2, mx: 'auto' }} />
        <Typography variant="h4" component="div" sx={{ mb: 4 }}>Comment Details</Typography>
        <Typography variant="h6" component="div" sx={{ mb: 4 }}><strong>Name:</strong> {comment.name.charAt(0).toUpperCase() + comment.name.slice(1)}</Typography>
        <Typography variant="body1" sx={{ mb: 3 }}><strong>Email:</strong> {comment.email}</Typography>
        <Typography variant="body2" sx={{ mb: 4 }}><strong>Text:</strong> {comment.body.charAt(0).toUpperCase() + comment.body.slice(1)}</Typography>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="primary" component={RouterLink} to="/reviews">
              Back
            </Button>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default CommentSingle;
