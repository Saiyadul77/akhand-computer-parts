import React from 'react';

const BuyingModel = ({ product, setProduct }) => {
    const { name, description, availableQuantity, minimumOrder, price } = product;

    const handleBuying = event => {
        event.preventDefault();
        const totalOrder= event.target.order.value;
        const afterOrder= availableQuantity-totalOrder;
        const totalPrice= price*totalOrder;

        console.log(name,totalPrice, afterOrder)
        setProduct(null);
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Product Name: {name}</h3>

                    <form onSubmit={handleBuying} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" name='name' placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Your Email" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='phone' placeholder="Your Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="text" value={description} class="input input-bordered w-full max-w-xs" />
                        <div className='flex w-full max-w-xs'>
                            <label class="label">
                                <span class="label-text">Available Quantity:</span>
                            </label>
                            <input type="text" value={availableQuantity} class="input input-bordered" />
                        </div>
                        <div className='flex w-full max-w-xs'>
                            <label class="label">
                                <span class="label-text">Per Unit Price:</span>
                            </label>
                            <input type="text" value={price} class="input input-bordered" />
                        </div>
                        <div className='flex w-full max-w-xs'>
                            <label class="label">
                                <span class="label-text">Order: ({minimumOrder})</span>
                            </label>
                            <input type="text" name='order' placeholder='Order Quantity' class="input input-bordered " />
                        </div>
                        <div className='flex w-full max-w-xs'>
                            <label class="label">
                                <span class="label-text">Total Price:</span>
                            </label>
                            <input type="text" name='price' class="input input-bordered" />
                        </div>

                        <input type="submit" value="Submit" class="btn btn-primary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BuyingModel;