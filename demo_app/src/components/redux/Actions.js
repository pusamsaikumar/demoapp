import axios from "axios";
import {
  GET_POST_DATA_START,
  GET_POST_DATA_SUCCESS,
  GET_POST_DATA_FAILURE,
} from "./Constants";

export const getPostDataDetails = (payload) => {
  return {
    type: GET_POST_DATA_START,
    payload: payload,
  };
};
export const getPostDataSuccess = (payload) => {
  return {
    type: GET_POST_DATA_SUCCESS,
    payload: payload,
  };
};
export const getPostDataFailure = (payload) => {
  return {
    type: GET_POST_DATA_FAILURE,
    payload: payload,
  };
};

// create getPostDataAPI
export const GetPOSTDetailsAPI = () => async (dispatch) => {
  dispatch(getPostDataDetails());
  await axios
    .get("https://dummyjson.com/posts")
    .then((response) => {
      dispatch(getPostDataSuccess(response?.data));
    })
    .catch((err) => {
      dispatch(getPostDataFailure({ error: err?.data?.message }));
    });
};
