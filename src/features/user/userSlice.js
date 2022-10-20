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
      const response = await customFetch.post("/auth/testingRegister", user)
      console.log( response );
    } catch (error) {
      console.log(error)
    }

    // console.log(`register user: ${JSON.stringify(user)}`)
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
