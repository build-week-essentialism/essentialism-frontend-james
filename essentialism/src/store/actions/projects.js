import axios from 'axios';
import { server_url } from '../../App';

export const GET_PROJECTS_LOADING = 'LOGIN_LOADING';
export const GET_PROJECTS_SUCCESS = 'LOGIN_SUCCESS';
export const GET_PROJECTS_FAILURE = 'LOGIN_FAILURE';

export const getMyProjects = () => dispatch => {
  dispatch({ type: GET_PROJECTS_LOADING });
  const user_id = localStorage.getItem('user_id');
  console.log('user_id =', user_id);
  return axios
    .get(`${server_url}/api/projects/${user_id}`)
    .then(res => {
      console.log('res =', res);
      dispatch({ type: GET_PROJECTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_PROJECTS_FAILURE, payload: err });
    });
};
