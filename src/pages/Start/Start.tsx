import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { SET_USER } from '../../store/constants';

interface FormValues {
    firstName: string;
    lastName: string;
}

const NameSchema = Yup.object().shape({
    firstName: Yup.string().required('Обязательное поле'),
    lastName: Yup.string().required('Обязательное поле'),
});

const Start: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

const handleSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    const userId = uuidv4();
    const userData = { ...values, id: userId };
    dispatch({ type: SET_USER, payload: userData });
    localStorage.setItem('user', JSON.stringify(userData));
    setSubmitting(false);
    navigate('/todos');
    };
    

    return (
        <Formik
            initialValues={{ firstName: '', lastName: '' }}
            validationSchema={NameSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <>
                    <Form>
                        <Field name="firstName" />
                        {errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : null}

                        <Field name="lastName" />
                        {errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : null}

                        <button type="submit">Перейти к задачам</button>
                    </Form>
                </>
            )}
        </Formik>
    );
};

export default Start;