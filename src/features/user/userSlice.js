import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
// import customFetch from "../../utils/axios"
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localstorage"
import { loginUserThunk, registerUserThunk, updateUserThunk } from "./userThunk"

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
  isSidebarOpen: false,
}

export const registerUser = createAsyncThunk(
  "user/registerUser",
  (user, thunkAPI) => {
    return registerUserThunk("/auth/register", user, thunkAPI)
  }
)

export const loginUser = createAsyncThunk(
  "user/loginUser",
  (user, thunkAPI) => {
    return loginUserThunk("/auth/login", user, thunkAPI)
  }
)

export const updateUser = createAsyncThunk(
  "user/updateUser",
  (user, thunkAPI) => {
    return updateUserThunk("/auth/updateUser", user, thunkAPI)
  }
)

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    },
    logoutUser: (state, { payload }) => {
      state.user = null
      state.isSidebarOpen = false
      removeUserFromLocalStorage()
      if (payload) {
        toast.success(payload)
      }
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload
      state.isLoading = false
      state.user = user
      addUserToLocalStorage(user)
      toast.success(`Hello There ${user.name}`)
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload
      state.isLoading = false
      state.user = user
      addUserToLocalStorage(user)
      toast.success(`Welcome back ${user.name}`)
    },
    [loginUser.rejected]: (state, { payload }) => {
      console.log(payload)
      state.isLoading = false
      toast.error(payload)
    },
    [updateUser.pending]: (state) => {
      state.isLoading = true
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.user = payload.user

      addUserToLocalStorage(payload.user)
      toast.success("user updated")
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
  },
})

export const { toggleSidebar, logoutUser } = userSlice.actions


export default userSlice.reducer
