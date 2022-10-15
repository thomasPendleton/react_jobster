import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const initialState = {
  isLoading: false,
  user: null,
}

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    console.log(`register user: ${user}`)
  }
)
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    console.log(`login user: ${user}`)
  }
)

const userSlice = createSlice({
  name: "user",
  initialState,
  reducer:{
    registerUser,
  }
})

export default userSlice.reducer
