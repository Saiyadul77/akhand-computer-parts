import React from 'react';

const Review = ({ review }) => {
    const { name, description, email } = review;
    return (
        <div className='text-center sm:text-left'>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{email}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;