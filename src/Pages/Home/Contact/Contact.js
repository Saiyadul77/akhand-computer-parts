import React from 'react';


const Contact = () => {

    return (
        <div className='my-5'>
            <h1 className='text-center font-bold text-3xl text-primary mb-5'>Contact</h1>

            <form>
                <div className='flex flex-col justify-center items-center gap-2'>

                    <div className="form-control w-full max-w-xs">
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" required/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" required/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <textarea className="textarea textarea-bordered h-24" placeholder="Your Message" required></textarea>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input type="text" placeholder="Your Contact Number" className="input input-bordered w-full max-w-xs" required/>
                    </div>
                    <input type="submit" value="Submit" className='btn btn-primary text-white bg-gradient-to-r from-sky-500 to-indigo-500 w-full max-w-xs'/>
                </div>
            </form>
        </div>
    );
};

export default Contact;