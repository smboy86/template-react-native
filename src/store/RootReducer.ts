import { combineReducers } from '@reduxjs/toolkit';

// import all reducers here
// import counterReducer from '../slices/counterSlice';
// import usersReducer from '../slices/usersSlice';
// import appReducer from '../slices/appSlice';

import tempReducer from '../slices/TempSlice';

// combine all reducers into a single state object
const RootReducer = combineReducers({
  temp: tempReducer,
  // counter: counterReducer,
  // users: usersReducer,
  // app: appReducer
});

// export root reducer's state type
export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
