import customFetch from "../../utils/axios"
import { logoutUser } from "./userSlice"

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await customFetch.post(url, user)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await customFetch.post(url, user)
    return response.data
  } catch (error) {
    console.error(error)
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await customFetch.patch(url, user, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    })
    return response.data
  } catch (err) {
    console.log(err.response)
    if (err.response.status === 401) {
      thunkAPI.rejectWithValue("Unauthorized! Logging out...")
      return thunkAPI.dispatch(logoutUser())
    }
    return thunkAPI.rejectWithValue(err.response.data.msg)
  }
}