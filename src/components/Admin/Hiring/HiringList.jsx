import React, { Fragment, useEffect } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, deleteJobs, getJobs } from '../../../redux/actions/jobAction';
import { DELETE_JOBS_RESET } from '../../../redux/Constants/jobConstant';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';

const HiringList = () => {

    const dispatch = useDispatch();

    const { error, jobs } = useSelector((state) => state.jobs);

    const { error: deleteError, isDeleted } = useSelector(
        (state) => state.job
      );

      const deleteJobHandler = (id) => {
        dispatch(deleteJobs(id));
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
          toast.success("Deleted Successfully");
          dispatch({ type: DELETE_JOBS_RESET });
        }
    
        dispatch(getJobs());
      }, [dispatch,  error, deleteError,  isDeleted]);
    

      const columns = [
        { field: "id", headerName: " ID", minWidth: 200, flex: 0.5 },
    
        {
          field: "title",
          headerName: "Title",
          minWidth: 350,
          flex: 1,
        },
        
        {
            field: "company",
            headerName: "Company",
            type: "string",
            minWidth: 150,
            flex: 0.3,
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
                    deleteJobHandler(params.getValue(params.id, "id"))
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

      jobs &&
      jobs.forEach((job) => {
          rows.push({
            id: job._id,
            title: job.title,
            company: job.company,
          });
        });

  return (
      <section>
      <div className="notes-1">
            
          <h1 id="productListHeading">Hiring's Ongoing</h1>

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

export default HiringList