import axios from "axios";

import * as actionTypes from "./actionsTypes";

export const login = (_email, _password) => async (dispatch) => {
  const data = {
    email: "w2fs@gmail.com",
    password: "123123",
  };

  let url = "http://localhost:3002/auth/loginuser/";
  let res;
  try {
    res = await axios.post(url, data);

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      user: res.data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      user: "Nones",
    });
  }
};

export const auth = () => async (dispatch) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IncyZnNAZ21haWwuY29tIiwidXNlcklkIjoiNjA0NTAxNDY4MzdjYWQ1ODJjMjYzYzQ5IiwiaWF0IjoxNjE2MzUzMjI5LCJleHAiOjE2MTYzNjA0Mjl9.PWhp-wDNfs7cHWnWyHzYws_hE7TqWvt8xhiqNEvd_0g";

  let res;
  try {
    res = await axios({
      method: "get", //you can set what request you want to be
      url: `http://localhost:3002/auth/status`,

      headers: {
        Authorization: token,
      },
    });
    dispatch({
      type: actionTypes.GETAUTH,
      user: res.data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      user: "Nones",
    });
  }
};
