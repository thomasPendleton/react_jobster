import customFetch from "../../utils/axios"
import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice"
import { logoutUser } from "../user/userSlice"
import { clearValues } from "./jobSlice"
// import authHeader from '../../utils/authHeader';


export const createJobThunk = async (job, thunkAPI) => {
  try {
    const response = await customFetch.post("/jobs/", job)
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
    const response = await customFetch.patch(`/jobs/${jobId}`, job)
    thunkAPI.dispatch(clearValues())
    return response.data
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const deleteJobThunk = async ( jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading())

  try {
    const response = await customFetch.delete(`/jobs/${jobId}`)
    thunkAPI.dispatch(getAllJobs())
    return response.data.msg
  } catch (error) {
    thunkAPI.dispatch(hideLoading())
    thunkAPI.rejectWithValue(error.response.data.msg)
  }
}
