import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const initialState = {
  isLoading: false,
  user: null,
}

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    console.log(`register user: ${JSON.stringify(user)}`)
  }
)
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    console.log(`login user: ${JSON.stringify(user)}`)
  }
)

const userSlice = createSlice({
  name: "user",
  initialState,
})

export default userSlice.reducer
