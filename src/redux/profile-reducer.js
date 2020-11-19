import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const SET_START_PROFILE_STATUS = 'SET_START_PROFILE_STATUS';
const SET_ERROR_SEND_STATUS = 'SET_ERROR_SEND_STATUS';

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 4},
    {id: 2, message: 'It\'s my first post', likesCount: 3},
    {id: 3, message: 'Bla bla', likesCount: 7},
    {id: 4, message: 'I\'m fine', likesCount: 22},
  ],
  newTextPost: '',
  userProfile: null,
  profileStatus: null,
  startProfileStatus: null,
  hasErrorUpdateStatus: false,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts,
          {
            id: state.posts.length + 1,
            message: state.newTextPost,
            likesCount: 0,}
        ],
        newTextPost: '',
      }
    case UPDATE_TEXT_POST:
      return {...state, newTextPost: action.text}
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: {...action.userProfile},
      }
    case SET_PROFILE_STATUS:
      return {
        ...state,
        profileStatus: action.profileStatus
      }
    case SET_START_PROFILE_STATUS:
      return {
        ...state,
        startProfileStatus: action.startProfileStatus,
        profileStatus: action.startProfileStatus,
      }
    case SET_ERROR_SEND_STATUS:
      return {
        ...state,
        hasErrorUpdateStatus: action.hasError,
      }
    default:
      return state
    }
}


export const addPostActionCreater = () => ({type: ADD_POST});
export const updateNewPostTextActionCreater = (text) => ({type: UPDATE_TEXT_POST, text: text});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile: userProfile});
export const setProfileStatus = (profileStatus) => ({type: SET_PROFILE_STATUS, profileStatus});
export const setStartProfileStatus = (startProfileStatus) => ({type: SET_START_PROFILE_STATUS, startProfileStatus});
export const setHasErrorSendStatus = (hasError) => ({type: SET_ERROR_SEND_STATUS, hasError});

export const getProfileThunkCreator = (userId) => (dispatch) => {
  profileAPI.getProfileUser(userId)
    .then(response => {
      dispatch(setUserProfile(response.data));
    })
}

export const getUserStatusTC = (userId) => (dispatch) => {
  profileAPI.getUserStatus(userId)
    .then(response => {
      dispatch(setStartProfileStatus(response.data));
    })
}

export const updateUserStatusTC = () => (dispatch, getState) => {
  const status = getState().profilePage.profileStatus;
  const startStatus = getState().profilePage.startProfileStatus;
  if (status !== startStatus) {
    profileAPI.updateUserStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setStartProfileStatus(status))
        }
      })
      .catch(data => {
        console.log('catch data', data);
        dispatch(setHasErrorSendStatus(true));
        dispatch(setProfileStatus(startStatus));
        setTimeout(()=> dispatch(setHasErrorSendStatus(false)), 3000);
      })
  }
}

export default profileReducer;
