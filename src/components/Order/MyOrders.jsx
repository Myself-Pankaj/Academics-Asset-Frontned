import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { getMyOrders } from '../../redux/actions/orderAction';
import { CLEAR_ERRORS } from '../../redux/Constants/orderConstants';
import Loader from '../Layout/Loader';

const MyOrders = () => {

    const dispatch = useDispatch();

    const { orders, loading, error } = useSelector((state) => state.myOrders);
  
    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch({ type: CLEAR_ERRORS });
      }
  
      dispatch(getMyOrders());
    }, [dispatch, error]);
  return (
    <section className="tableClass">
    {loading === false ? (
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Item Name</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders &&
              orders.map((i) => (
                <tr key={i._id}>
                  <td>#{i._id}</td>
                  <td>{i.orderStatus}</td>
                  <td>
                    {i.orderItems[0].quantity}
                  </td>
                  <td>
                    {i.orderItems[0].name}
                  </td>
                  <td>₹{i.totalAmount}</td>
                  <td>{i.paymentMethod}</td>
                  <td>
                    <Link to={`/order/${i._id}`}>
                      <AiOutlineEye />
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
    ) : (
      <Loader />
    )}
  </section>
  )
}

export default MyOrders