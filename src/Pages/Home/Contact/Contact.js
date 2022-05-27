import React from 'react';


const Contact = () => {

    return (
        <div className='my-5'>
            <h1 className='text-center font-bold text-3xl text-primary mb-5'>Contact</h1>

            <form>
                <div className='flex flex-col justify-center items-center gap-2'>

                    <div class="form-control w-full max-w-xs">
                        <input type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs" required/>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <input type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs" required/>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <textarea class="textarea textarea-bordered h-24" placeholder="Your Message" required></textarea>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <input type="text" placeholder="Your Contact Number" class="input input-bordered w-full max-w-xs" required/>
                    </div>
                    <input type="submit" value="Submit" className='btn btn-primary w-full max-w-xs'/>
                </div>
            </form>
        </div>
    );
};

export default Contact;