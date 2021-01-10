import React from 'react';
import rootReducer from './RootReducer';

const initRootData = {
  isLogin: false,
  notif: null,
  userInfo: {},
};

export const RootContext = React.createContext(initRootData);

const RootContextProvider = (props) => {
  const [state, dispatch] = React.useReducer(rootReducer, initRootData);
  return <RootContext.Provider value={{state, dispatch}}>{props.children}</RootContext.Provider>;
};

export default RootContextProvider;
