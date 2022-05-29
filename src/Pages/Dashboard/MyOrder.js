import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [order, setOrder] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?customerEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setOrder(data));
        }
    }, [user])

    return (
        <div>
            <h1>This is my order page: {order.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Total Price</th>
      </tr>
    </thead>
    <tbody>
      
      {
          order.map(e=><tr>
            <th>1</th>
            <td>{e.customerName}</td>
            <td>{e.customerEmail}</td>
            <td>{e.product}</td>
            <td>{e.order}</td>
            <td>{e.totalPrice}</td>
          </tr>)
      }
      
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrder;