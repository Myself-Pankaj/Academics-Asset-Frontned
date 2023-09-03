import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../redux/store";
import { createOrder, paymentVerification } from "../../redux/actions/orderAction";
import { CLEAR_ERRORS, CLEAR_MESSAGE } from "../../redux/Constants/orderConstants";

const ConfirmOrder = () => {
  // shippingInfo,
  //   orderItems,
  //   paymentMethod,
  //   itemsPrice,
  //   taxPrice,
  //   shippingCharges,
  //   totalAmount,

  const [paymentMethod, setPaymentMethod] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);

  
  const itemsPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = itemsPrice > 1000 ? 0 : 100;

  const taxPrice = itemsPrice * 0.0018;

  const totalAmount = itemsPrice + taxPrice + shippingCharges;

  const { message, error } = useSelector((state) => state.newOrder);

  
  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);


    if (paymentMethod === "COD") {
      dispatch(
        createOrder(
          shippingInfo,
          cartItems,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingCharges,
          totalAmount
        )

      );
    } else {
      // createorderonline

      const {
        data: { order, orderOptions },
      } = await axios.post(
        `${server}/createonlineorder`,
        {
          shippingInfo,
          orderItems: cartItems,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingCharges,
          totalAmount,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const options = {
        key: "rzp_test_9cDu8YQiioMO9f",
        amount: order.amount,
        currency: "INR",
        name: "Accedemic-Asset's",
        description: "For Students",
        order_id: order.id,
        handler: function (response) {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
            response;

          dispatch(
            paymentVerification(
              razorpay_payment_id,
              razorpay_order_id,
              razorpay_signature,
              orderOptions
            )   
          );
        },

        theme: {
          color: "#9c003c",
        },
      };
      const Razor = new window.Razorpay(options);
      Razor.open();
    }
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: CLEAR_MESSAGE });
      // dispatch({ type: "emptyState" });
      navigate("/paymentsuccess");
    }
    if (error) {
      toast.error(error);
      dispatch({ type: CLEAR_ERRORS });
      setDisableBtn(false);
    }
  }, [dispatch, message, error, navigate]);

  return (
    <section className="confirmOrder">
      <main>
        <h1>Confirm Order</h1>

        <form onSubmit={submitHandler}>
          <div>
            <label>Cash On Delivery</label>
            <input
              type="radio"
              name="payment"
              onChange={() => setPaymentMethod("COD")}
              required
            />
          </div>
          <div>
            <label>Online</label>
            <input
              type="radio"
              required
              name="payment"
              onChange={() => setPaymentMethod("Online")}
            />
          </div>

          <button disabled={disableBtn} type="submit">
            Place Order
          </button>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;
