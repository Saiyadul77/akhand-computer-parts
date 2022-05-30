import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen px-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/SyC9wXN/Computer-hardware-components.jpg" className="max-w-sm rounded-lg shadow-2xl h-48 w-full object-cover md:h-full md:w-48 lg:h-full lg:w-96" />
                <div>
                    <h1 className="text-5xl font-bold">Order online now!!!!</h1>
                    <p className="py-6">Akhand Computer Parts is Largest Chain Computer stores in BD, with best prices on Desktops, Laptops, PC Parts, Cameras, Gaming, Printers & more........</p>
                    <button className="btn btn-primary text-white bg-gradient-to-r from-sky-500 to-indigo-500">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;