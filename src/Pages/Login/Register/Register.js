import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken/useToken';
// import { async } from '@firebase/util';

const Register = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, error2] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const [token]  = useToken(user || user1);


    if (loading || loading1 || updating) {
        return <Loading></Loading>
    }

    if (token) {
        navigate('/inventory');
    }

    let signInError;
    if (error || error1 || error2) {
        return (
            <div>
                signInError = <p>Error: {error.message || error1.message || error2.message}</p>
            </div>
        );
    }

    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        console.log('user updated');
        navigate ('/inventory');
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Register</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    }
                                })}

                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-800">{errors.name.message}</span>}


                            </label>
                        </div>
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

                        <input className='w-full max-w-xs btn btn-outline btn-accent' value='Register' type="submit" />
                    </form>

                    <p><small>Already member? <Link className='text-primary' to="/login">Please Login</Link></small></p>
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

export default Register;