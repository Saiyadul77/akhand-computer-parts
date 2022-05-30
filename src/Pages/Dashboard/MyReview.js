import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)

        const url = `https://secret-fjord-21413.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },    // coma na deoar karone lal bati dekhaise
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if(result.insertedId){
                    toast('Additing your Item!!');
                    
                }
            })
            

    };
    return (
        <div className=''>
            <h1 className='text-center mt-3 text-3xl'>Add Your Review</h1>
            <div className='justify-center items-center ml-40 '>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 input w-full max-w-xs' disabled value={user?.email || ''} {...register("name")} /> <br />
                <input className='mb-2 input w-full max-w-xs' disabled value={user?.email || ''} type="email" {...register("price")} /> <br />
                <textarea className='mb-2 input w-full max-w-xs' placeholder='Write your Review'{...register("review")} /> <br />
                
                <input className='text-white bg-primary input w-full max-w-xs' type="submit" value="Add Review" />
            </form>
            </div>
        </div>
    );
};

export default MyReview;