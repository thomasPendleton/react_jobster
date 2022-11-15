import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import customFetch from "../../utils/axios"

const initialFiltersState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
}
const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState,
}

export const getAllJobs = createAsyncThunk(
  "allJobs/getJobs",
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get("/jobs")
      return response.data
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

export const showStats = createAsyncThunk('allJobs/showStats',
async(_, thunkAPI) => {
    try {
      const response = await customFetch('/jobs/stats')
      return response.data
    } catch (error) {
     return thunkAPI.rejectWithValue(error.response.data.msg) 
    }
}

)


const allJobsSlice = createSlice({
  name: "allJobs/",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true
    },
    hideLoading: (state) => {
      state.isLoading = false
    },
  },
  extraReducers: {
    [getAllJobs.pending]: (state, action) => {
      state.isLoading = true
    },
    [getAllJobs.fulfilled]: (state, { payload: { jobs } }) => {
      state.isLoading = false
      state.jobs = jobs
    },
    [getAllJobs.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [showStats.pending] : (state, action) => {
      state.isLoading = true
    },
    [showStats.fulfilled] : (state, {payload}) => {
      state.isLoading = false
      state.stats = payload.defaultStats
      state.monthlyApplications = payload.monthlyApplications
    },
    [showStats.rejected] : (state, {payload}) => {
      state.isLoading = false
      toast.error(payload)
    },
  },
})

export const { showLoading, hideLoading } = allJobsSlice.actions

export default allJobsSlice.reducer
