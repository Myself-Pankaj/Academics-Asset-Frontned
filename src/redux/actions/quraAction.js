import axios from "axios";
import {
  ALL_ANSWER_FAIL,
  ALL_ANSWER_REQUEST,
  ALL_ANSWER_SUCCESS,
  ALL_QUE_ANS_FAIL,
  ALL_QUE_ANS_REQUEST,
  ALL_QUE_ANS_SUCCESS,
  CLEAR_ERRORS,
  DELETE_ANSWER_FAIL,
  DELETE_ANSWER_REQUEST,
  DELETE_ANSWER_SUCCESS,
  DELETE_QUE_ANS_FAIL,
  DELETE_QUE_ANS_REQUEST,
  DELETE_QUE_ANS_SUCCESS,
  NEW_ANSWER_FAIL,
  NEW_ANSWER_REQUEST,
  NEW_ANSWER_SUCCESS,
  NEW_QUE_ANS_FAIL,
  NEW_QUE_ANS_REQUEST,
  NEW_QUE_ANS_SUCCESS,
  QUE_ANS_DETAILS_FAIL,
  QUE_ANS_DETAILS_REQUEST,
  QUE_ANS_DETAILS_SUCCESS,
} from "../Constants/quraConstants";
import { server } from "../store";

export const getQueAns = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_QUE_ANS_REQUEST });

    let link = `${server}/Questions`;
    const { data } = await axios.get(link);

    dispatch({
      type: ALL_QUE_ANS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_QUE_ANS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Product
export const createQueAns = (queData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_QUE_ANS_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `${server}/createQuestion`,
      queData,
      config
    );

    dispatch({
      type: NEW_QUE_ANS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_QUE_ANS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Product
export const deleteQueAns = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_QUE_ANS_REQUEST });

    const config = {
      withCredentials: true,
    };
    const { data } = await axios.delete(`${server}/Question/${id}`, config);

    dispatch({
      type: DELETE_QUE_ANS_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_QUE_ANS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Products Details
export const getQueAnsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: QUE_ANS_DETAILS_REQUEST });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(`${server}/Question/${id}`, config);

    dispatch({
      type: QUE_ANS_DETAILS_SUCCESS,
      payload: data.que,
    });
  } catch (error) {
    dispatch({
      type: QUE_ANS_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// NEW REVIEW
export const newAnswer = (answerData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_ANSWER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.put(`${server}/answer`, answerData, config);

    dispatch({
      type: NEW_ANSWER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_ANSWER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Reviews of a Product
export const getAllAnswers = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_ANSWER_REQUEST });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(`${server}/answer?id=${id}`, config);

    dispatch({
      type: ALL_ANSWER_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_ANSWER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Review of a Product
export const deleteAnswer = (answerId, queId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ANSWER_REQUEST });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.delete(
      `${server}/delete?id=${answerId}&productId=${queId}`,
      config
    );

    dispatch({
      type: DELETE_ANSWER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ANSWER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
