import React from 'react';
import './Item.css'

const Item = ({ item, setProduct }) => {
    const {name, img, description, price, availableQuantity, minimumOrder } = item;
    
    return (
        <div>
            <div className='text-center sm:text-left'>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure><img className="h-48 w-full object-cover md:h-full md:w-48 lg:h-full lg:w-96" src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{description}</p>
                        <p>Per Unit Price: ${price}</p>
                        <p>Available Quantity: {availableQuantity}</p>
                        <p>Minimum Order: {minimumOrder}</p>
                        <div className="card-actions justify-end">
                            <label
                                disabled={availableQuantity < 2}
                                onClick={() => setProduct(item)}
                                for="my-modal-6"
                                className="btn btn-primary text-white bg-gradient-to-r from-sky-500 to-indigo-500">Buy Now</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;