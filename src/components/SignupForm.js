import React, { useContext } from 'react';
import Button from './Button';
import Overlay from './Overlay';
import Form from './Form';
import { MainContext } from '../contexts/MainContext';
import { AuthContext } from '../contexts/AuthContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

const SignupForm = ({ cancel, form }) => {
    const { darkMode } = useContext(MainContext);
    const { signup } = useContext(AuthContext);

    const history = useHistory();

    const cancelHandler = () => {
        cancel();
    };

    const signupForm = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().required('Username is required'),
            email: Yup.string().required('Email is required').email('Email is invalid'),
            password: Yup.string().required('Password is required').min(6, 'Password is 6 characters minimum')
        }),
        onSubmit: async({ username, email, password }, { setFieldError }) => {
            try {
                await signup(username, email, password);
                cancel();
                history.push('/home');
            } catch(err) {
                setFieldError('signup', err.message);
            }
        }
    });

    return (
        <Overlay form={form}>
            <Form mode={darkMode ? 1 : 0} onSubmit={signupForm.handleSubmit}>
                <h2>Signup</h2>
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={signupForm.values.username}
                    onChange={signupForm.handleChange}
                    onBlur={signupForm.handleBlur}
                />
                {
                    signupForm.errors.username && signupForm.touched.username && <strong>{signupForm.errors.username}</strong>
                }
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={signupForm.values.email}
                    onChange={signupForm.handleChange}
                    onBlur={signupForm.handleBlur}
                />
                {
                    signupForm.errors.email && signupForm.touched.email && <strong>{signupForm.errors.email}</strong>
                }
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={signupForm.values.password}
                    onChange={signupForm.handleChange}
                    onBlur={signupForm.handleBlur}
                />
                {
                    signupForm.errors.password && signupForm.touched.password && <strong>{signupForm.errors.password}</strong>
                }
                <div>
                    <Button mode={darkMode ? 1 : 0} type='submit'>Signup</Button>
                    <span style={{ marginLeft: '1rem', cursor: 'pointer' }} onClick={() => cancelHandler()}>Cancel</span>
                </div>
                {
                    signupForm.errors.signup && <strong>{signupForm.errors.signup}</strong>
                }
            </Form>
        </Overlay>
    );
}

export default SignupForm;