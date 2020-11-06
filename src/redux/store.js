import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const store = {
  _state: {
    dialogsPage: {
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
    },
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 4},
        {id: 2, message: 'It\'s my first post', likesCount: 3},
        {id: 3, message: 'Bla bla', likesCount: 7},
        {id: 4, message: 'I\'m fine', likesCount: 22},
      ],
      newTextPost: '',
    },
    sidebar: {
      friends: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Tayler'},
        {id: 3, name: 'Mike'},
      ]
    },
  },
  _callSubscriber() {
    console.log('state chenged');
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this.getState());
  },
}

export default store
