import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen px-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Order online now!!!!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary text-white bg-gradient-to-r from-sky-500 to-indigo-500">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;