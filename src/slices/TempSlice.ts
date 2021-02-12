import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// service
// types
import { TempState } from '../types';

const initialState: TempState = {
  isLogin: false,
  greeting: 'init 안녕~~~',
  userName: '',
};

const tempSlice = createSlice({
  name: 'temp',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ userName: string }>) {
      const { userName } = action.payload;
      state.isLogin = true;
      state.userName = userName;
    },
    logout(state) {
      state.isLogin = false;
    },
    setText(state, action: PayloadAction<{ gretting: string }>) {
      const { gretting } = action.payload;
      state.greeting = gretting;
    },
  },
});

export const { login, logout, setText, setNotif } = tempSlice.actions;
export default tempSlice.reducer;

/*


// import { AppThunk } from '../store';

const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers(state) {
      state.inProgress = true;
      state.error = null;
    },
    getUsersSuccess(state, action: PayloadAction<{ users: User[] }>) {
      const { users } = action.payload;
      state.inProgress = false;
      state.users = users;
    },
    getUsersFailure(state, action: PayloadAction<string>) {
      state.inProgress = false;
      state.error = action.payload;
    },
  },
});
export const { getUsers, getUsersSuccess, getUsersFailure } = users.actions;
export default users.reducer;
// 썽크는 슬라이스로 안만들고 간단히 해부리네?? 와이??
export const fetchUsers = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getUsers());
    const users = await DummyService.getUsers();
    dispatch(getUsersSuccess({ users }));
  } catch (ex) {
    dispatch(getUsersFailure('error:' + ex));
  }
};
*/
