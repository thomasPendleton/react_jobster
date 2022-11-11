import customFetch from "../../utils/axios"
import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice"
import { logoutUser } from "../user/userSlice"
import { clearValues } from "./jobSlice"

export const createJobThunk = async (url, job, thunkAPI) => {
  try {
    const response = await customFetch.post(url, job, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    })
    thunkAPI.dispatch(clearValues())
    return response.data
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser())
      thunkAPI.dispatch(clearValues())
      return thunkAPI.rejectWithValue("Unauthorized! Logging Out...")
    }
    thunkAPI.dispatch(clearValues())
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const response = await customFetch.patch(`/jobs/${jobId}`, job, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    })
    thunkAPI.dispatch(clearValues())
    return response.data
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const deleteJobThunk = async (url, jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading())

  try {
    const response = await customFetch.delete(`${url}${jobId}`, {
      header: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    })
    thunkAPI.dispatch(getAllJobs())
    return response.data.msg
  } catch (error) {
    thunkAPI.dispatch(hideLoading())
    thunkAPI.rejectWithValue(error.response.data.msg)
  }
}
