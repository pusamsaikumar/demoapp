import {
  GET_POST_DATA_START,
  GET_POST_DATA_SUCCESS,
  GET_POST_DATA_FAILURE,
} from "./Constants";

const initialState = {
  getPostDetailsData: {},
  getPostDetailsMessage: "",
  getPostDetailsLoading: false,
};

export const getpostDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_DATA_START: {
      return {
        ...state,
        getPostDetailsLoading: true,
      };
    }
    case GET_POST_DATA_SUCCESS: {
      return {
        ...state,
        getPostDataDetails: action.payload,
        getPostDetailsLoading: false,
      };
    }
    case GET_POST_DATA_FAILURE: {
      return {
        ...state,
        getPostDetailsLoading: false,
        getPostDetailsMessage: action.payload.error,
      };
    }
    default:
      return state;
  }
};
