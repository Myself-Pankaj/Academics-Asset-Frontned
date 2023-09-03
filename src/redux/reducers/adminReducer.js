import {
  ADMIN_ORDERS_FAIL,
  ADMIN_ORDERS_REQUEST,
  ADMIN_ORDERS_SUCCESS,
  CLEAR_ERRORS,
  CLEAR_MESSAGE,
  PROCESS_ORDERS_FAIL,
  PROCESS_ORDERS_REQUEST,
  PROCESS_ORDERS_SUCCESS,
} from "../Constants/orderConstants";
import {
  ALL_USERS_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  DASHBOARD_STATS_FAIL,
  DASHBOARD_STATS_REQUEST,
  DASHBOARD_STATS_SUCCESS,
} from "../Constants/userConstants";

export const adminReducer = (state = { orders: [], users: [] }, action) => {
  switch (action.type) {
    case ALL_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };
    case ALL_USERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ADMIN_ORDERS_REQUEST: // admin
      return {
        ...state,
        loading: true,
      };
    case ADMIN_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case ADMIN_ORDERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case PROCESS_ORDERS_REQUEST: // admin
      return {
        ...state,
        loading: true,
      };
    case PROCESS_ORDERS_SUCCESS: // admin
      return {
        loading: false,
        message: action.payload,
      };
    case PROCESS_ORDERS_FAIL: // admin
      return {
        loading: false,
        error: action.payload,
      };
    case DASHBOARD_STATS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DASHBOARD_STATS_SUCCESS:
      return {
        ...state,
        loading: false,
        usersCount: action.payload.usersCount,
        ordersCount: action.payload.ordersCount,
        totalIncome: action.payload.totalIncome,
      };
    case DASHBOARD_STATS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
        case CLEAR_MESSAGE:
          return {
            ...state,
            error: null,
          };

      default:
        return state;
  }
};
