import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { SET_USER } from '../../store/constants';
import { Button, TextField, Typography, Box, Grid, useTheme } from '@mui/material';
import { ThemeContext } from '../../Context/themeContext';

interface FormValues {
  firstName: string;
  lastName: string;
}

const NameSchema = Yup.object().shape({
  firstName: Yup.string().required('This field is required'),
  lastName: Yup.string().required('This field is required'),
});

const newUser = require('../../assets/add-user.svg').default;

const Start: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  
  const handleSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    const userId = uuidv4();
    const userData = { ...values, id: userId };
    dispatch({ type: SET_USER, payload: userData });
    localStorage.setItem('user', JSON.stringify(userData));
    setSubmitting(false);
    navigate('/todos');
  };

  const appTheme = useContext(ThemeContext).theme;

  return (
    <Grid container alignItems={'center'} justifyContent={'center '} spacing={1}
      sx={{
        padding: {
          xs: '25px',
          md: '30px',
          lg: '50px',
          xl: '30px',
        },
        height: {
          xs: 'auto',
          md: 'auto',
          lg: 'auto',
          xl: 'auto'
        }
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', width:'100%' }}>
        <Typography variant="h3" component="h3" textAlign={'center'}
          sx={{
            padding: {
              xs: '15px',
              md: '40px',
              lg: '30px',
              xl: '30px',
            },
          }}
        >
          Hello! Let's get started!
        </Typography>
      </div>
      <Grid item xs={12} md={6} lg={6} xl={4}
        sx={{
          marginTop: {
            xs: theme.spacing(2),
            md: '30px',
            lg: '40px',
            xl: '50px',
          },
          marginBottom: {
            xs: '60px',
            md: '60px',
            lg: '60px',
            xl: '100px',
          }
        }}
      >
        <Formik
          initialValues={{ firstName: '', lastName: '' }}
          validationSchema={NameSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }} p={'50px'}>
                <Field
                  as={TextField}
                  name="firstName"
                  label="First Name"
                  variant="standard"
                  error={!!(errors.firstName && touched.firstName)}
                  helperText={errors.firstName && touched.firstName && errors.firstName}
                  InputLabelProps={{ style: { color: appTheme.palette.text.primary } }}
                />
                <Field
                  as={TextField}
                  name="lastName"
                  label="Last Name"
                  variant="standard"
                  error={!!(errors.lastName && touched.lastName)}
                  helperText={errors.lastName && touched.lastName && errors.lastName}
                  InputLabelProps={{ style: { color: appTheme.palette.text.primary } }}
                />
                <Button variant="contained" color="primary" type="submit">
                  Go to Tasks
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Grid>
      <Grid item xs={12} md={6} lg={6} xl={4}
        sx={{
          order: { xs: 2, md: 1 }
        }}
      >
        <img className='img-new-user' src={newUser} width={'100%'} alt={'img-new-user'} />
      </Grid>
    </Grid>
  );
};

export default Start;
