import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews]=useState([]);

    useEffect(() => {
        const url=`https://secret-fjord-21413.herokuapp.com/review`
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div>
            <h1 className='text-center text-2xl font-bold text-primary my-5'>Customer Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    reviews.map(review => <Review key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;