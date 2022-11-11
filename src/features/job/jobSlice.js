import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import customFetch from "../../utils/axios"
import { getUserFromLocalStorage } from "../../utils/localstorage"
import { logoutUser, updateUser } from "../user/userSlice"
import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice"
import { createJobThunk, deleteJobThunk, editJobThunk } from "./jobThunk"

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJobId: "",
}

export const createJob = createAsyncThunk("job/createJob", (job, thunkAPI) => {
  return createJobThunk("/jobs/", job, thunkAPI)
})

export const editJob = createAsyncThunk("job/editJob", (job, thunkAPI) => {
  return editJobThunk(job, thunkAPI)
})

export const deleteJob = createAsyncThunk(
  "job/deleteJob",
  (jobId, thunkAPI) => {
    thunkAPI.dispatch(showLoading())
    return deleteJobThunk("/jobs/", jobId, thunkAPI)
  }
)

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value
    },
    clearValues: () => {
      return {
        ...initialState,
        jobLocation: getUserFromLocalStorage()?.location || "",
      }
    },
    setEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload }
    },
  },
  extraReducers: {
    [createJob.pending]: (state) => {
      state.isLoading = true
    },
    [createJob.fulfilled]: (state, action) => {
      state.isLoading = false
      toast.success("Job Created")
    },
    [createJob.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [deleteJob.fulfilled]: (state, action) => {
      toast.success(action.payload)
    },
    [deleteJob.rejected]: (state, { payload }) => {
      toast.error(payload)
    },
    [editJob.pending]: (state, action) => {
      state.isLoading = true
    },
    [editJob.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      toast.success("Job changed...")
    },
    [editJob.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
  },
})

export const { handleChange, clearValues, setEditJob } = jobSlice.actions 


export default jobSlice.reducer


