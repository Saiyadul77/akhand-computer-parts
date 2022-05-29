import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const BuyingModel = ({ product, setProduct }) => {
    const { _id, name, availableQuantity, minimumOrder, price } = product;
    const [user, loading, error] = useAuthState(auth);

    const handleBuying = event => {
        event.preventDefault();
        const order = event.target.order.value;
            
            const totalPrice = price * order;
                const balance = availableQuantity-order;

                const booking = {
                    productId: _id,
                    product: name,
                    order,
                    totalPrice,
                    balance,
                    customerEmail: user.email,
                    customerName: user.displayName,
                    phone: event.target.phone.value
                }
                fetch('https://secret-fjord-21413.herokuapp.com/booking', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(booking)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        toast.success('Order is success')
                        setProduct(null);
                    })


    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Product Name: {name}</h3>

                    <form onSubmit={handleBuying} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Your Phone Number" className="input input-bordered w-full max-w-xs" required />
                        <div className='flex w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Available Quantity:</span>
                            </label>
                            <input type="text" value={availableQuantity} className="input input-bordered" disabled />
                        </div>
                        <div className='flex w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Per Unit Price:</span>
                            </label>
                            <input type="text" value={price} className="input input-bordered" disabled />
                        </div>
                        <div className='flex w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Order: ({minimumOrder})</span>
                            </label>
                            <input type="text" name='order' placeholder='Order Quantity' className="input input-bordered " required />
                        </div>
                        <input type="submit" value="Submit" className="btn btn-primary text-white bg-gradient-to-r from-sky-500 to-indigo-500 w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BuyingModel;