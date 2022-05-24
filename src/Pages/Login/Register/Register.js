import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Form, Button } from 'react-bootstrap';
import Loading from '../../Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();

    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate('/home');
    }


    const navigateLogin = event => {
        event.preventDefault();
        navigate('/login')
    }

    const handleUserRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        if (agree) {
            createUserWithEmailAndPassword(email, password)
        }


    }
    return (
        <div className='register-form'>
            <h2 className='text-teal-500 text-3xl text-center my-3' >Please register</h2>
            <form onSubmit={handleUserRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Full Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />

                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Book Warehouse terms and condition?</label>

                <input
                    disabled={!agree}
                    className="btn btn-info mt-2" type="submit" value="Register" />
            </form>
            <p >Already Member? <Link to='/login' className='text-danger text-decoration-none text-teal-500' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;