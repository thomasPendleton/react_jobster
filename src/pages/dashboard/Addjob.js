import React from 'react'
import { FormRow } from "../../components"
import Wrapper from "../../assets/wrappers/DashboardFormPage"
import { useSelector, useDispatch } from "react-redux"
import { toast } from "react-toastify"
import FormRowSelect from "../../components/FormRowSelect"

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
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!position || !company || !jobLocation) {
      toast.error("please fill out all fields")
      return
    }
  }

  const handleJobInput = (e) => {
    const value = e.target.value
    const name = e.target.name
    console.log(name, value)
  }

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
            labelText='job type'
            value={status}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />

          <div className="btn-container">
            <button
              type="button"
              onClick={() => console.log("clear please")}
              className="btn btn-block clear-btn"
            >
              clear
            </button>
            <button
              type="button"
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