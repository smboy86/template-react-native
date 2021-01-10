// Actions.js
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SET_NOTIF = 'SET_NOTIF';

// Reducer.js
const rootReducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case LOGIN:
      return {...state, isLogin: true};
    case LOGOUT:
      return {...state, isLogin: false};
    case SET_NOTIF:
      return {...state, notif: payload.notif};
    default:
      return state;
  }
};

export default rootReducer;
