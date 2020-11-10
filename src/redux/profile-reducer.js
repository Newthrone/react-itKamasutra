const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 4},
    {id: 2, message: 'It\'s my first post', likesCount: 3},
    {id: 3, message: 'Bla bla', likesCount: 7},
    {id: 4, message: 'I\'m fine', likesCount: 22},
  ],
  newTextPost: '',
  userProfile: null,
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

    default:
      return state
    }
}

export default profileReducer;

export const addPostActionCreater = () => ({type: ADD_POST});
export const updateNewPostTextActionCreater = (text) => ({type: UPDATE_TEXT_POST, text: text});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile: userProfile});
