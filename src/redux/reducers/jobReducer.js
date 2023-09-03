import {
  ADMIN_JOBS_REQUEST,
  ALL_JOBS_FAIL,
  ALL_JOBS_REQUEST,
  ALL_JOBS_SUCCESS,
  CLEAR_ERRORS,
  DELETE_JOBS_FAIL,
  DELETE_JOBS_REQUEST,
  DELETE_JOBS_RESET,
  DELETE_JOBS_SUCCESS,
  JOBS_DETAILS_FAIL,
  JOBS_DETAILS_REQUEST,
  JOBS_DETAILS_SUCCESS,
  NEW_JOBS_FAIL,
  NEW_JOBS_REQUEST,
  NEW_JOBS_RESET,
  NEW_JOBS_SUCCESS,
  UPDATE_JOBS_FAIL,
  UPDATE_JOBS_REQUEST,
  UPDATE_JOBS_RESET,
  UPDATE_JOBS_SUCCESS,
} from "../Constants/jobConstant";

export const jobsReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case ALL_JOBS_REQUEST:
    case ADMIN_JOBS_REQUEST:
      return {
        loading: true,
        jobs: [],
      };
    case ALL_JOBS_SUCCESS:
      return {
        loading: false,
        jobs: action.payload.jobs,
        jobsCount: action.payload.jobsCount,
        resultPerPage: action.payload.resultPerPage,
        filteredJobsCount: action.payload.filteredJobsCount,
      };

    case ALL_JOBS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const jobDetailsReducer = (state = { job: {} }, action) => {
  switch (action.type) {
    case JOBS_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case JOBS_DETAILS_SUCCESS:
      return {
        loading: false,
        job: action.payload,
      };
    case JOBS_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newJobReducer = (state = { job: {} }, action) => {
  switch (action.type) {
    case NEW_JOBS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_JOBS_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        job: action.payload.job,
      };
    case NEW_JOBS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_JOBS_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const jobReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_JOBS_REQUEST:
    case UPDATE_JOBS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_JOBS_FAIL:
    case UPDATE_JOBS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_JOBS_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_JOBS_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
