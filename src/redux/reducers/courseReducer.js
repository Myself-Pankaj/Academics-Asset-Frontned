//Create Content

import { ALL_CONTENT_FAIL, ALL_CONTENT_REQUEST, ALL_CONTENT_SUCCESS, CLEAR_ERRORS, CONTENT_DETAILS_FAIL, CONTENT_DETAILS_REQUEST, CONTENT_DETAILS_SUCCESS, DELETE_CONTENT_FAIL, DELETE_CONTENT_REQUEST, DELETE_CONTENT_RESET, DELETE_CONTENT_SUCCESS, NEW_CONTENT_FAIL, NEW_CONTENT_REQUEST, NEW_CONTENT_RESET, NEW_CONTENT_SUCCESS, UPDATE_CONTENT_FAIL, UPDATE_CONTENT_REQUEST, UPDATE_CONTENT_RESET, UPDATE_CONTENT_SUCCESS } from "../Constants/courseConstants";

export const newCourseReducer = (state = { course: {} }, action) => {
    switch (action.type) {
      case NEW_CONTENT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_CONTENT_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          course: action.payload.course,
        };
      case NEW_CONTENT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_CONTENT_RESET:
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
  
  export const coursesReducer = (state = { courses: [] }, action) => {
    switch (action.type) {
      case ALL_CONTENT_REQUEST:
        return {
          loading: true,
          courses: [],
        };
      case ALL_CONTENT_SUCCESS:
        return {
          loading: false,
          courses: action.payload.courses,
          coursesCount: action.payload.coursesCount,
          resultPerPage: action.payload.resultPerPage,
          filteredCoursesCount: action.payload.filteredCoursesCount,
        };
  
  
      case ALL_CONTENT_FAIL:
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
  
  
  export const courseDetailsReducer = (state = { course: [] }, action) => {
    switch (action.type) {
      case CONTENT_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
  
      case CONTENT_DETAILS_SUCCESS:
        return {
          loading: false,
          course: action.payload,
        };
  
      case CONTENT_DETAILS_FAIL:
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
  
  //Delete & Update
  
  export const courseReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_CONTENT_REQUEST:
      case UPDATE_CONTENT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_CONTENT_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
  
      case UPDATE_CONTENT_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_CONTENT_FAIL:
      case UPDATE_CONTENT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETE_CONTENT_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_CONTENT_RESET:
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
