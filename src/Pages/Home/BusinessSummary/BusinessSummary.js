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
                <div class="stats stats-vertical lg:stats-horizontal shadow">

                    <div class="stat">
                        <div class="stat-title text-xl text-center text-primary font-bold">Total Customer</div>
                        <h3 className='text-2xl justify-center text-center text-orange-500 font-bold'><HiOutlineUsers /> </h3>
                        <div class="stat-value tex-secondary">100K+</div>
                        <div class="stat-desc">1992 to Present</div>

                    </div>

                    <div class="stat">
                        <div class="stat-title text-orange-500 text-xl text-center font-bold">New Customer</div>
                        <h3 className='text-2xl justify-center text-center text-primary font-bold'><HiUserAdd /> </h3>
                        <div class="stat-value">5000</div>
                        <div class="stat-desc">At the last six month</div>
                    </div>

                    <div class="stat">
                        <div class="stat-title text-green-500 text-xl text-center font-bold">Annual Revenue</div>
                        <h3 className='text-2xl justify-center text-center text-orange-500 font-bold'><HiCurrencyDollar /> </h3>
                        <div class="stat-value">200M+</div>
                        <div class="stat-desc">By Service and Selling</div>
                    </div>
                    <div class="stat">
                        <div class="stat-title text-red-500 text-xl text-center font-bold">Reviews</div>
                        <h3 className='text-2xl justify-center text-center text-orange-500 font-bold'><FcApproval /> </h3>
                        <div class="stat-value">33K+</div>
                        <div class="stat-desc">1992 to present</div>
                    </div>
                    <div class="stat">
                        <div class="stat-title text-green-500 text-xl text-center font-bold">Parts</div>
                        <h3 className='text-2xl justify-center text-center text-orange-500 font-bold'><MdComputer /> </h3>
                        <div class="stat-value">100+</div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;