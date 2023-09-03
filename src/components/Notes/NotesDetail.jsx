import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { pink } from "@mui/material/colors";
import toast from "react-hot-toast";
import {
  clearErrors,
  getProductDetails,
} from "../../redux/actions/productAction";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { addItemsToCart } from "../../redux/actions/cartAction";
import "./Notes.css";

const NotesDetail = ({ delay = 0 }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const { product, error } = useSelector((state) => state.productDetails);

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };
  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    toast.success("Item Added To Cart");
  };
  const { id } = useParams();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProductDetails(id));
  }, [dispatch, error, id]);

  return (
    <section>
      <motion.div
        initial={{
          x: "-100%",
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay,
        }}
        className="detailblock"
      >
        <main>
        <Carousel autoPlay animation="slide" className="crousel1">
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
          {/* {Boolean(product?.images) && <img src={product.images[0].url} alt={product.name} />} */}
          <h2>{product.name}</h2>
          <h1>{`₹${product.price}`}</h1>

          <p>
            Status:
            <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
              {product.Stock < 1 ? "OutOfStock" : "InStock"}
            </b>
          </p>
          <div className="detailsBlock-3-1-1">
            <button onClick={decreaseQuantity}>-</button>
            <input readOnly type="number" value={quantity} />
            <button onClick={increaseQuantity}>+</button>
          </div>
          <button
            disabled={product.Stock < 1 ? true : false}
            onClick={addToCartHandler}
          >
            <span>
              {" "}
              <AddShoppingCartIcon sx={{ color: pink[500] }} /> Add to Cart
            </span>
          </button>
        </main>
      </motion.div>
    </section>
  );
};

export default NotesDetail;
