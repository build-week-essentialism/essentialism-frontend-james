import axios from "axios";
import { server_url } from '../../App';

export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";;

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_LOADING });
  return axios
    .post(`${server_url}/api/auth/login`, credentials)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user_id", res.data.user.id);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};
