const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const TOTAL_PAGE = 'TOTAL_PAGE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
/*   users: [
    { id: 1, fullName: 'Slava', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/100px-NewTux.svg.png', status: 'I\'m a boss', location: {city: 'Krasnodar', country: 'Russia'}, followed: true, },
    { id: 2, fullName: 'Andrew', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/100px-NewTux.svg.png', status: 'I\'m a boss too', location: {city: 'Moscow', country: 'Russia'}, followed: false, },
    { id: 3, fullName: 'Sveta', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/100px-NewTux.svg.png', status: 'I\'m a boss too', location: {city: 'Kirov', country: 'Russia'}, followed: true, },
    { id: 4, fullName: 'Tayler', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/100px-NewTux.svg.png', status: 'I\'m a boss too', location: {city: 'Boston', country: 'USA'}, followed: false, },
    { id: 5, fullName: 'Mika', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/100px-NewTux.svg.png', status: 'I\'m a boss too', location: {city: 'Helsinki', country: 'Finland'}, followed: true, },
    { id: 6, fullName: 'Andrew', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/100px-NewTux.svg.png', status: 'I\'m a boss too', location: {city: 'Vancouver', country: 'Canada'}, followed: true, },
  ], */
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

export default usersReducer

export const followAC = (userID) => ({type: FOLLOW, userID});
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setTotalPagesAC = (totalPages) => ({type: TOTAL_PAGE, totalPages});
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page});
export const setIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
