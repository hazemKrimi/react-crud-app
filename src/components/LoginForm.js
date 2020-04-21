import React, { useContext } from 'react';
import Button from './Button';
import Overlay from './Overlay';
import Form from './Form';
import { MainContext } from '../contexts/MainContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

const LoginForm = ({ cancel }) => {
    const { darkMode, login } = useContext(MainContext);

    const history = useHistory();

    const cancelHandler = () => {
        cancel();
    };

    const loginForm = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().required('Email is required').email('Email is invalid'),
            password: Yup.string().required('Password is required').min(6, 'Password is 6 characters minimum')
        }),
        onSubmit: async ({ email, password }, { setFieldError }) => {
            try {
                await login(email, password);
                history.push('/home');
            } catch (err) {
                setFieldError('login', err);
            }
        }
    });

    return ( 
        <Overlay>
            <Form mode={darkMode ? 1 : 0} onSubmit={loginForm.handleSubmit}>
                <h2>Login</h2>
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={loginForm.values.email}
                    onChange={loginForm.handleChange}
                    onBlur={loginForm.handleBlur}
                />
                {
                    loginForm.errors.email && loginForm.touched.email && <strong>{loginForm.errors.email}</strong>
                }
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={loginForm.values.password}
                    onChange={loginForm.handleChange}
                    onBlur={loginForm.handleBlur}
                />
                {
                    loginForm.errors.password && loginForm.touched.password && <strong>{loginForm.errors.password}</strong>
                }
                <div>
                    <Button mode={darkMode ? 1 : 0} type='submit'>Login</Button>
                    <span onClick={() => cancelHandler()}>Cancel</span>
                </div>
                {
                    loginForm.errors.login && <strong>{loginForm.errors.login}</strong>
                }
            </Form>
        </Overlay>
    );
}
 
export default LoginForm;