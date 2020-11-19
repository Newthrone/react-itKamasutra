import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

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

    default:
      return state
  }
}

export const setAuthUserData = (userId, login, email ) => ({type: SET_USER_DATA, data: {userId, email, login}})

export const getAuthenticationThunkCreator = () => (dispatch) => {
  authAPI.getAuthentication()
      .then(response => {
        if (response.data.resultCode === 0) {
          const { id, login, email } = response.data.data;
          dispatch(setAuthUserData(id, login, email))
        }
      })
}

export default authReducer;
