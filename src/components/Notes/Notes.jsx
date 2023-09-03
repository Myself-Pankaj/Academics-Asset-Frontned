import React, { useEffect } from "react";
// import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import NotesCard from "./NotesCard";
import "./Notes.css";
import { clearErrors, getProduct } from "../../redux/actions/productAction";
import toast from "react-hot-toast";


const Notes = () => {
  const dispatch = useDispatch();
  const {  error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());

  }, [dispatch, error]);


  return (
    <section>
      <div className="notes">
        {products &&
          products.map((product) => (
            <NotesCard
              key={product._id}
              product={product}
              
            />
          ))}
      </div>
    </section>
  );
};

export default Notes;
