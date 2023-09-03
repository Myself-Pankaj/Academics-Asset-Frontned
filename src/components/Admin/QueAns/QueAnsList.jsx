import React, { Fragment, useEffect } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, deleteQueAns, getQueAns } from '../../../redux/actions/quraAction';
import { DELETE_QUE_ANS_RESET } from '../../../redux/Constants/quraConstants';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';

const QueAnsList = () => {

  const dispatch = useDispatch();

  const { error, ques } = useSelector((state) => state.queAns);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.queAnsdelete
  );

  const deleteQueAnsHandler = (id) => {
    dispatch(deleteQueAns(id));
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
      
      dispatch({ type: DELETE_QUE_ANS_RESET });
    }

    dispatch(getQueAns());
  }, [dispatch, error, deleteError,  isDeleted]);

    const columns = [
      { field: "id", headerName: " ID", minWidth: 200, flex: 0.5 },
  
      {
        field: "question",
        headerName: "Question",
        minWidth: 350,
        flex: 1,
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
                  deleteQueAnsHandler(params.getValue(params.id, "id"))
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
  
    ques &&
    ques.forEach((item) => {
        rows.push({
          id: item._id,
          question: item.question,
        });
      });
  return (
    <section>
    <div className="notes-1">
          
        <h1 id="productListHeading">Q and A</h1>

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

export default QueAnsList