import React, { Fragment, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  deleteCourse,
  getCourse,
} from "../../../redux/actions/courseAction";
import { DELETE_CONTENT_RESET } from "../../../redux/Constants/courseConstants";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";
const CoursesList = () => {
  const dispatch = useDispatch();

  const { error, courses } = useSelector((state) => state.courses);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.course
  );

  const deleteContentHandler = (id) => {
    dispatch(deleteCourse(id));
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
      dispatch({ type: DELETE_CONTENT_RESET });
    }
    dispatch(getCourse());
  }, [dispatch, error, deleteError, isDeleted]);

  const columns = [
    { field: "id", headerName: " ID", minWidth: 200, flex: 0.5 },

    {
      field: "title",
      headerName: "Name",
      minWidth: 350,
      flex: 1,
    },

    {
      field: "author",
      headerName: "Author",
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
                deleteContentHandler(params.getValue(params.id, "id"))
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

  courses &&
    courses.forEach((item) => {
      rows.push({
        id: item._id,
        title: item.title,
        author: item.author,
      });
    });

  return (
    <section>
      <div className="notes-1">
        <h1 id="productListHeading">Courses We Offer</h1>

        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={2}
          disableSelectionOnClick
          className="courseListTable"
          autoHeight
        />
      </div>
    </section>
  );
};

export default CoursesList;
