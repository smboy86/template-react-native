// Actions.js
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Reducer.js
const rootReducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case LOGIN:
      return {...state, isLogin: true};
    case LOGOUT:
      return {...state, isLogin: false};
    default:
      return state;
  }
};

export default rootReducer;
