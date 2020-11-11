import { getUsersAPI, requestFollowUser, requestUnfollowUser } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const TOTAL_PAGE = 'TOTAL_PAGE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  users: [],
  currentPage: 1,
  pageSize: 7,
  totalPages: 1,
  isFetching: false,
}

const usersReducer = (state= initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      }
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          return user.id === action.userID
          ? {...user, followed: true}
          : user
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          return user.id === action.userID
          ? {...user, followed: false}
          : user
        }),
      }
    case TOTAL_PAGE:
      return {
        ...state,
        totalPages: action.totalPages,
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }

    default:
      return state
  }
}


export const followUser = (userID) => ({type: FOLLOW, userID});
export const unfollowUser = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalPages = (totalPages) => ({type: TOTAL_PAGE, totalPages});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
  dispatch(setIsFetching(true));
  getUsersAPI(currentPage, pageSize)
      .then(({data}) => {
        dispatch(setIsFetching(false));
        dispatch(setTotalPages(Math.ceil(data.totalCount/pageSize)))
        dispatch(setUsers(data.items))
      })
}

export const requestFollowUserThunkCreator = (userId, callback) => (dispatch) => {
  requestFollowUser(userId)
    .then((response) => {
      if (response.data.resultCode === 0) dispatch(followUser(userId));
      callback();
    })
}

export const requestUnfollowUserThunkCreator = (userId, callback) => (dispatch) => {
  requestUnfollowUser(userId)
      .then((response) => {
        if (response.data.resultCode === 0) dispatch(unfollowUser(userId));
        callback();
    })
}

export default usersReducer
