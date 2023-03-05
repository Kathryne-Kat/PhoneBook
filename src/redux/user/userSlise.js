const { createSlice } = require('@reduxjs/toolkit');
const { register, logIn, refreshUser, logOut } = require('./operations');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

function pendingHandler(state) {
  state.isLoading = true;
  state.error = null;
}
function rejectHandler(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, pendingHandler)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.rejected, rejectHandler)

      .addCase(logIn.pending, pendingHandler)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logIn.rejected, rejectHandler)

      .addCase(logOut.pending, pendingHandler)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logOut.rejected, rejectHandler)

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoading = false;
        state.error = payload;
      }),
});

export const userReducer = userSlice.reducer;
