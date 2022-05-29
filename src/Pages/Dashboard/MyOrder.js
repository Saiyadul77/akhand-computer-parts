import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      fetch(`https://secret-fjord-21413.herokuapp.com/booking?customerEmail=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => {
          console.log('res', res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
          }
          return res.json()
        })
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
              order.map((e, index) => <tr>
                <th>{index + 1}</th>
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