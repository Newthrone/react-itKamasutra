import { getAuthentication } from "./auth-reducer";

const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES';

const initialState = {
  initialized: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCES:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state
  }
}

export const initializedSucces = () => {
  return {type: INITIALIZED_SUCCES}};

export const initializeApp = () => dispatch => {
  let promise = dispatch(getAuthentication)
  promise.then(() => {dispatch(initializedSucces())})
}

export default appReducer
