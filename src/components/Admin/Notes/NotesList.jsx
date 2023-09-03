import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast from "react-hot-toast";
import { clearErrors, deleteProduct, getProduct } from '../../../redux/actions/productAction';
import { DELETE_PRODUCT_RESET } from '../../../redux/Constants/productConstants';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';




const NotesList = () => {
  const dispatch = useDispatch();

  const { error, products } = useSelector((state) => state.products);
  const { error: deleteError, isDeleted } = useSelector(
      (state) => state.product
    );

    const deleteProductHandler = (id) => {
      dispatch(deleteProduct(id));
    };

    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch(clearErrors());
      }
  
      if (deleteError) {
        toast.error(deleteError);
        dispatch(clearErrors());
      }
  
      if (isDeleted) {
        toast.success(" Deleted Successfully");
        
        dispatch({ type: DELETE_PRODUCT_RESET });
      }
  
      dispatch(getProduct());
    }, [dispatch, error, deleteError,  isDeleted]);

    const columns = [
      { field: "id", headerName: " ID", minWidth: 200, flex: 0.5 },
  
      {
        field: "name",
        headerName: "Name",
        minWidth: 350,
        flex: 1,
      },
    
  
      {
        field: "price",
        headerName: "Price",
        type: "number",
        minWidth: 100,
        flex: 0.5,
      },
  
      {
        field: "actions",
        flex: 0.3,
        headerName: "Actions",
        minWidth: 150,
        type: "number",
        sortable: false,
        renderCell: (params) => {
          return (
            <Fragment>
            
  
              <button
                onClick={() =>
                  deleteProductHandler(params.getValue(params.id, "id"))
                }
              >
                <DeleteIcon />
              </button>
            </Fragment>
          );
        },
      },
    ];
  
    const rows = [];
  
    products &&
      products.forEach((item) => {
        rows.push({
          id: item._id,
          price: item.price,
          name: item.name,
        });
      });
  return (
    <section>
      <div className="notes-1">
            
          <h1 id="productListHeading">Notes We Have</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={2}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        
      </div>
    </section>
  )
}

export default NotesList