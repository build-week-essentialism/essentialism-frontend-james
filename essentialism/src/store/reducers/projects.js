import * as actionTypes from '../actions/index.js';

const initialState = {
  projects_loading: false,
  error: '',
  myProjects: []
};

export const ProjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login
    case actionTypes.GET_PROJECTS_LOADING:
      return {
        ...state,
        projects_loading: true,
        error: ''
      };
    case actionTypes.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects_loading: false,
        error: '',
        myProjects: action.payload
      };
    case actionTypes.GET_PROJECTS_FAILURE:
      return {
        ...state,
        projects_loading: false,
        error: action.payload,
        myProjects: []
      };

    default:
      return state;
  }
};
