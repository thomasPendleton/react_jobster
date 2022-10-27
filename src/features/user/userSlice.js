import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import customFetch from "../../utils/axios"

const initialState = {
  isLoading: false,
  user: null,
}

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post("/auth/register", user)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      console.log(`login user: ${JSON.stringify(user)}`)
      const response = await customFetch.post("/auth/login", user)
      return response.data
    } catch (error) {
      console.error(error)
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      console.log(payload)
      const { user } = payload
      state.user = user
      toast.success(`Hello There ${user.name}`)
      state.isLoading = false
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      console.log(payload)
      const { user } = payload
      state.isLoading = false
      state.user = user
      toast.success(`Welcome back ${user.name}`)

    },
    [loginUser.rejected]: (state, { payload }) => {
      console.log(payload)
      state.isLoading = false
      toast.error(payload)
    },
  },
})

export default userSlice.reducer
