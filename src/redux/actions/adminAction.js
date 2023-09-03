import { server } from "../store";
import axios from "axios";
import {
  ALL_USERS_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  DASHBOARD_STATS_FAIL,
  DASHBOARD_STATS_REQUEST,
  DASHBOARD_STATS_SUCCESS,
} from "../Constants/userConstants";
import {
  ADMIN_ORDERS_FAIL,
  ADMIN_ORDERS_REQUEST,
  ADMIN_ORDERS_SUCCESS,
  PROCESS_ORDERS_FAIL,
  PROCESS_ORDERS_REQUEST,
  PROCESS_ORDERS_SUCCESS,
} from "../Constants/orderConstants";

export const getAdminStats = () => async (dispatch) => {
  try {
    dispatch({ type: DASHBOARD_STATS_REQUEST });

    const { data } = await axios.get(`${server}/admin/stats`, {
      withCredentials: true,
    });

    dispatch({ type: DASHBOARD_STATS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DASHBOARD_STATS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getAdminUsers = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST });

    const { data } = await axios.get(`${server}/admin/users`, {
      withCredentials: true,
    });

    dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
  } catch (error) {
    dispatch({
      type: ALL_USERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getAdminOrders = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_ORDERS_REQUEST });

    const { data } = await axios.get(`${server}/admin/order`, {
      withCredentials: true,
    });

    dispatch({ type: ADMIN_ORDERS_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({
      type: ADMIN_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const processOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROCESS_ORDERS_REQUEST });

    const { data } = await axios.get(`${server}/admin/order/${id}`, {
      withCredentials: true,
    });

    dispatch({ type: PROCESS_ORDERS_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: PROCESS_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};
