import React from 'react';
import { HiOutlineUsers } from "react-icons/hi";
import { HiUserAdd } from "react-icons/hi";
import { HiCurrencyDollar } from "react-icons/hi";
import { FcApproval } from "react-icons/fc";
import { MdComputer } from "react-icons/md";

const BusinessSummary = () => {
    return (
        <section className='mt-5'>
            <h1 className='text-2xl text-center font-bold text-primary uppercase'>Business Summary</h1>
            <div className='flex justify-center items-center'>
                <div className="stats stats-vertical lg:stats-horizontal shadow">

                    <div className="stat">
                        <div className="stat-title text-xl text-center text-primary font-bold">Total Customer</div>
                        <h3 className='text-2xl justify-center text-center text-orange-500 font-bold'><HiOutlineUsers /> </h3>
                        <div className="stat-value tex-secondary">100K+</div>
                        <div className="stat-desc">1992 to Present</div>

                    </div>

                    <div className="stat">
                        <div className="stat-title text-orange-500 text-xl text-center font-bold">New Customer</div>
                        <h3 className='text-2xl justify-center text-center text-primary font-bold'><HiUserAdd /> </h3>
                        <div className="stat-value">5000</div>
                        <div className="stat-desc">At the last six month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title text-green-500 text-xl text-center font-bold">Annual Revenue</div>
                        <h3 className='text-2xl justify-center text-center text-orange-500 font-bold'><HiCurrencyDollar /> </h3>
                        <div className="stat-value">200M+</div>
                        <div className="stat-desc">By Service and Selling</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title text-red-500 text-xl text-center font-bold">Reviews</div>
                        <h3 className='text-2xl justify-center text-center text-orange-500 font-bold'><FcApproval /> </h3>
                        <div className="stat-value">33K+</div>
                        <div className="stat-desc">1992 to present</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title text-green-500 text-xl text-center font-bold">Parts</div>
                        <h3 className='text-2xl justify-center text-center text-orange-500 font-bold'><MdComputer /> </h3>
                        <div className="stat-value">100+</div>
                        <div className="stat-desc">All computer parts are available</div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;