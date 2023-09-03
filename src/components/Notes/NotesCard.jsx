import React from "react";
import "./Notes.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



const NotesCard = ({ product,handler, delay = 0 }) => {
 
  return (
    <section>
      <Link to={`/getproductdetail/${product._id}`}>
      <motion.div
        className="menuCard"
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
      >
        <main>

          <div className="leftCard">
            <img src={product.images[0].url} alt={product.name} />
          </div>

          <div className="rightCard">
            <h2>{product.name}</h2>
            <h5>{product.description}</h5>
            <h1>{`₹${product.price}`}</h1>
          </div>

        </main>

      </motion.div>
      </Link>
    </section>
  );
};

export default NotesCard;
