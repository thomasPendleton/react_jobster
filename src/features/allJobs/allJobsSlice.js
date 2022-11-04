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
      const response = await customFetch.get("/jobs", {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      return response.data
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const allJobsSlice = createSlice({
  name: "allJobs/",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllJobs.pending]: (state, action) => {
        state.isLoading = true

    },
    [getAllJobs.fulfilled]: (state, action) => {
      state.isLoading = false
      console.log(action.payload.jobs)
      state.jobs = action.payload.jobs
    },
    [getAllJobs.rejected]: (state, action) => {
      state.isLoading = false
    },
  },
})



export default allJobsSlice.reducer