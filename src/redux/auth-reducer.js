import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const DELETE_USER_DATA = 'DELETE_USER_DATA';

let initialState = {
  userId: null,
  login: null,
  email: null,
  messages: [],
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      }
    case DELETE_USER_DATA:
      return {
        ...state,
        userId: null,
        login: null,
        email: null,
        isAuth: false,
      }

    default:
      return state
  }
}

export const setAuthUserData = (userId, login, email ) => ({type: SET_USER_DATA, data: {userId, email, login}})
export const deleteAuthUserData = () => ({type: DELETE_USER_DATA})

const getAuthentication = (dispatch) => {
  authAPI.getAuthentication()
  .then(response => {
    if (response.data.resultCode === 0) {
      const { id, login, email } = response.data.data;
      dispatch(setAuthUserData(id, login, email))
    }
  })
}

export const getAuthenticationThunkCreator = () => (dispatch) => {getAuthentication(dispatch)}

export const authorizationTC = (loginData) => (dispatch) => {
  authAPI.authorization(loginData)
    .then(response => {
      if(response.data.resultCode === 0) {
        getAuthentication(dispatch);
      }
    })
}

export const deleteAuthenticationTC = () => (dispatch) => {
  authAPI.deAuthorization()
    .then(response => {
      if(response.data.resultCode === 0) {
        dispatch(deleteAuthUserData());
      }
    })
}

export default authReducer;
