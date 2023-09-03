import axios from "axios";
import { ALL_CONTENT_FAIL, ALL_CONTENT_REQUEST, ALL_CONTENT_SUCCESS, CLEAR_ERRORS, CONTENT_DETAILS_FAIL, CONTENT_DETAILS_REQUEST, CONTENT_DETAILS_SUCCESS, DELETE_CONTENT_FAIL, DELETE_CONTENT_REQUEST, DELETE_CONTENT_SUCCESS, NEW_CONTENT_FAIL, NEW_CONTENT_REQUEST, NEW_CONTENT_SUCCESS, UPDATE_CONTENT_FAIL, UPDATE_CONTENT_REQUEST, UPDATE_CONTENT_SUCCESS } from "../Constants/courseConstants";
import { server } from "../store";


// Get All Content
export const getCourse =
  () =>
    async (dispatch) => {
      try {
        dispatch({ type: ALL_CONTENT_REQUEST });

        const { data } = await axios.get(`${server}/courses`, {
            withCredentials: true,
          });

        dispatch({
          type: ALL_CONTENT_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: ALL_CONTENT_FAIL,
          payload: error.response.data.message,
        });
      }
    };

    // Create Content
export const createCourse = (course) => async (dispatch) => {
    try {
      dispatch({ type: NEW_CONTENT_REQUEST });
  
      const config = {
      
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      
    };
      const { data } = await axios.post(`${server}/addnewcourse`, course, config);
  
      dispatch({ type: NEW_CONTENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: NEW_CONTENT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Delete Product
export const deleteCourse = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_CONTENT_REQUEST });
      
      const config={
        withCredentials: true,
      }
  
      const { data } = await axios.delete(`${server}/deletecourse/${id}`,config);
  
      dispatch({
        type: DELETE_CONTENT_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_CONTENT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Update Product
  export const updateContent = (id, contentData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_CONTENT_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.put(
        `${server}/updatecourse/${id}`,
        contentData,
        config
      );
  
      dispatch({
        type: UPDATE_CONTENT_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_CONTENT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  // Get Products Details
export const getCourseDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CONTENT_DETAILS_REQUEST });

    const { data } = await axios.get(`${server}/course/${id}`);

    dispatch({
      type: CONTENT_DETAILS_SUCCESS,
      payload: data.course,
    });
  } catch (error) {
    dispatch({
      type: CONTENT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
  
  // Clearing Errors
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  