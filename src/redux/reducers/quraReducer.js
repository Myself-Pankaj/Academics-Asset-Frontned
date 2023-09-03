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
  DELETE_ANSWER_RESET,
  DELETE_ANSWER_SUCCESS,
  DELETE_QUE_ANS_FAIL,
  DELETE_QUE_ANS_REQUEST,
  DELETE_QUE_ANS_RESET,
  DELETE_QUE_ANS_SUCCESS,
  NEW_ANSWER_FAIL,
  NEW_ANSWER_REQUEST,
  NEW_ANSWER_RESET,
  NEW_ANSWER_SUCCESS,
  NEW_QUE_ANS_FAIL,
  NEW_QUE_ANS_REQUEST,
  NEW_QUE_ANS_RESET,
  NEW_QUE_ANS_SUCCESS,
  QUE_ANS_DETAILS_FAIL,
  QUE_ANS_DETAILS_REQUEST,
  QUE_ANS_DETAILS_SUCCESS,
} from "../Constants/quraConstants";

export const quraReducer = (state = { ques: [] }, action) => {
  switch (action.type) {
    case ALL_QUE_ANS_REQUEST:
      return {
        loading: true,
        ques: [],
      };
    case ALL_QUE_ANS_SUCCESS:
      return {
        loading: false,
        ques: action.payload.ques,
      };
    case ALL_QUE_ANS_FAIL:
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

export const newQuraReducer = (state = { que: {} }, action) => {
  switch (action.type) {
    case NEW_QUE_ANS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_QUE_ANS_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        que: action.payload.que,
      };
    case NEW_QUE_ANS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_QUE_ANS_RESET:
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

export const queAnsReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_QUE_ANS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_QUE_ANS_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case DELETE_QUE_ANS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_QUE_ANS_RESET:
      return {
        ...state,
        isDeleted: false,
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

export const quraDetailsReducer = (state = { que: {} }, action) => {
  switch (action.type) {
    case QUE_ANS_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case QUE_ANS_DETAILS_SUCCESS:
      return {
        loading: false,
        que: action.payload,
      };
    case QUE_ANS_DETAILS_FAIL:
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

export const newAnswerReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_ANSWER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_ANSWER_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_ANSWER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_ANSWER_RESET:
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

export const quraAnswersReducer = (state = { answers: [] }, action) => {
  switch (action.type) {
    case ALL_ANSWER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_ANSWER_SUCCESS:
      return {
        loading: false,
        answers: action.payload,
      };
    case ALL_ANSWER_FAIL:
      return {
        ...state,
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

export const answerReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ANSWER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ANSWER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_ANSWER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_ANSWER_RESET:
      return {
        ...state,
        isDeleted: false,
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
