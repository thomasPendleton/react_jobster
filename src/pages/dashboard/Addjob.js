import React, { useEffect } from "react"
import { FormRow } from "../../components"
import Wrapper from "../../assets/wrappers/DashboardFormPage"
import { useSelector, useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { FormRowSelect } from "../../components"
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from "../../features/job/jobSlice"

const Addjob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job)
  const { user } = useSelector((store) => store.user)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!position || !company || !jobLocation) {
      toast.error("please fill out all fields")
      return
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            jobType,
            status,
          },
        })
      )
      return 
    }
    dispatch(createJob({ position, company, jobLocation, status, jobType }))
  }

  const handleJobInput = (e) => {
    const value = e.target.value
    const name = e.target.name
    dispatch(handleChange({ name, value }))
  }

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: "jobLocation", value: user.location }))
    }
  }, [])

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />

          {/* Select  */}
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />

          {/* Select  */}

          <FormRowSelect
            name="jobType"
            labelText="job type"
            value={status}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />

          <div className="btn-container">
            <button
              type="button"
              onClick={() => dispatch(clearValues())}
              className="btn btn-block clear-btn"
            >
              clear
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
              className="btn btn-block submit-btn"
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default Addjob
