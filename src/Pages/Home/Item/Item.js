import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    const { _id, name, img, description, price, availableQuantity, minimumOrder } = item;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div>
            <div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{name}</h2>
                        <p>{description}</p>
                        <p>Per Unit Price: ${price}</p>
                        <p>Available Quantity: {availableQuantity}</p>
                        <p>Minimum Order: {minimumOrder}</p>
                        <div class="card-actions justify-end">
                            <button onClick={() => navigateToServiceDetail(_id)}class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;