const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' },
  ],

  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'what\'s your name' },
    { id: 3, message: 'i saw your yesterday' },
    { id: 4, message: 'Bye' },
    { id: 5, message: 'Hello' },
    { id: 6, message: 'I like my family' },
  ],
  newMessage: '',
}

const dialogReducer = (state= initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages,
          {
            id: state.messages.length + 1,
            message: state.newMessage,
          },
        ],
        newMessage: '',
      }
    case UPDATE_TEXT_MESSAGE:
      return {...state, newMessage: action.text}
    default:
      return state
  }
}

export default dialogReducer

export const addMessageActionCreater = ( ) => ({type: ADD_MESSAGE});
export const updateNewTextMessageActionCreater = (text) => ({type: UPDATE_TEXT_MESSAGE, text: text});
