import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken/useToken';


const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);
    const [token]=useToken(user || user1)

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {

        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if(error || error1){
        signInError= <p className='text-red-500'><small>{error?.message || error1.message }</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data);
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please valid email'
                                    }
                                })}

                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-800">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-800">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input
                                type="password"
                                placeholder="Enter Your valid paasword"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Please valid password'
                                    }
                                })}

                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-800">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-800">{errors.password.message}</span>}

                            </label>
                        </div>

                        {signInError}

                        <input className='w-full max-w-xs btn btn-outline btn-accent' value='Login' type="submit" />
                    </form>

                    <p><small>New to member <Link className='text-primary' to="/register">Create New Account</Link></small></p>
                    
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-accent"
                    >Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;