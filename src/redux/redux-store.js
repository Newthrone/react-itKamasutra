import {applyMiddleware, combineReducers, createStore} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import appReducer from './app-reducer';
import authReducer from './auth-reducer';
import dialogReducer from './dialog-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store
