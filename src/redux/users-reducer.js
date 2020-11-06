const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  // users: [
    // { id: 1, fullName: 'Slava', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/100px-NewTux.svg.png', status: 'I\'m a boss', location: {city: 'Krasnodar', country: 'Russia'}, followed: true, },
    // { id: 2, fullName: 'Andrew', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/100px-NewTux.svg.png', status: 'I\'m a boss too', location: {city: 'Moscow', country: 'Russia'}, followed: false, },
    // { id: 3, fullName: 'Sveta', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/100px-NewTux.svg.png', status: 'I\'m a boss too', location: {city: 'Kirov', country: 'Russia'}, followed: true, },
    // { id: 4, fullName: 'Tayler', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/100px-NewTux.svg.png', status: 'I\'m a boss too', location: {city: 'Boston', country: 'USA'}, followed: false, },
    // { id: 5, fullName: 'Mika', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/100px-NewTux.svg.png', status: 'I\'m a boss too', location: {city: 'Helsinki', country: 'Finland'}, followed: true, },
    // { id: 6, fullName: 'Andrew', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/100px-NewTux.svg.png', status: 'I\'m a boss too', location: {city: 'Vancouver', country: 'Canada'}, followed: true, },
  // ],
  users: [],
}

const usersReducer = (state= initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      console.log('state', state);
      let newState = {...state, users: [...state.users, ...action.users]};
      console.log('newState', newState);
      return newState
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
    default:
      return state
  }
}

export default usersReducer

export const followAC = (userID) => ({type: FOLLOW, userID});
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
