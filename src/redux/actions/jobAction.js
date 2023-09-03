import axios from "axios";
import {
  ALL_JOBS_FAIL,
  ALL_JOBS_REQUEST,
  ALL_JOBS_SUCCESS,
  CLEAR_ERRORS,
  DELETE_JOBS_FAIL,
  DELETE_JOBS_REQUEST,
  DELETE_JOBS_SUCCESS,
  JOBS_DETAILS_FAIL,
  JOBS_DETAILS_REQUEST,
  JOBS_DETAILS_SUCCESS,
  NEW_JOBS_FAIL,
  NEW_JOBS_REQUEST,
  NEW_JOBS_SUCCESS,
} from "../Constants/jobConstant";

import { server } from "../store";

// Get All jobs
export const getJobs =
  () =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_JOBS_REQUEST });

      let link = `${server}/jobupdate`;

      const { data } = await axios.get(link, {
        withCredentials: true,
      });

      dispatch({
        type: ALL_JOBS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_JOBS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get Jobs Details
export const getJobDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: JOBS_DETAILS_REQUEST });

    const { data } = await axios.get(`${server}/jobupdate/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: JOBS_DETAILS_SUCCESS,
      payload: data.job,
    });
  } catch (error) {
    dispatch({
      type: JOBS_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteJobs = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_JOBS_REQUEST });

    const { data } = await axios.delete(`${server}/deletejob/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: DELETE_JOBS_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_JOBS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create
export const createJob = (job) => async (dispatch) => {
  try {
    dispatch({ type: NEW_JOBS_REQUEST });

    const config = {
      
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      
    };
    const { data } = await axios.post(`${server}/addnewjob`, job, config);

    dispatch({ type: NEW_JOBS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NEW_JOBS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
