import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/GitHub.png'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const navigate = useNavigate()
    const location = useLocation();


    let from = location.state?.from?.pathname || "/";

    let errorElement;
    if (error || error1 || error2) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message} {error2?.message}</p>

    }
    if (user || user1 || user2) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='d-flex items-center my-5'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2 text-center'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 inline-block mr-2'>
                    <div className='flex items-center'>
                    <img src={google} alt="" />
                    <span className='p-2'>Google Sign In</span>
                    </div>
                </button>

                <button onClick={() => signInWithFacebook()} className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 inline-block mr-2'>
                    <div className='flex items-center'>
                    <img src={facebook} alt="" />
                    <span className='p-2'>Facebook Sign In</span>
                    </div>
                </button>
                <button onClick={() => signInWithGithub()} className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 inline-block mr-2'>
                    <div className='flex items-center'>
                    <img src={github} alt="" />
                    <span className='p-2'>Github Sign In</span>
                    </div>
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;