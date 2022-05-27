import React from 'react';
import './Item.css'

const Item = ({ item, setProduct }) => {
    const {name, img, description, price, availableQuantity, minimumOrder } = item;
    
    return (
        <div>
            <div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{name}</h2>
                        <p>{description}</p>
                        <p>Per Unit Price: ${price}</p>
                        <p>Available Quantity: {availableQuantity}</p>
                        <p>Minimum Order: {minimumOrder}</p>
                        <div class="card-actions justify-end">
                            <label
                                disabled={availableQuantity < 6}
                                onClick={() => setProduct(item)}
                                for="my-modal-6"
                                class="btn btn-primary">Buy Now</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;