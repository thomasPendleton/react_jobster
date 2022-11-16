import { useEffect } from "react"
import Job from "./Job"
import Wrapper from "../assets/wrappers/JobsContainer"
import { useSelector, useDispatch } from "react-redux"
import Loading from './Loading';
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import PageBtnContainer from "./PageBtnContainer"

const JobsContainer = () => {
  const { jobs, isLoading, totalJobs, page, numOfPages, search, searchStatus, searchType, sort } = useSelector(
    (store) => store.allJobs
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllJobs())
      // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort])

  if (isLoading) {
    return (
      <Wrapper>
        <Loading center />
      </Wrapper>
    )
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <h5>
        {" "}
        {totalJobs} job{jobs.length > 1 ? "s" : null} found
      </h5>
      <div className="jobs">
        {jobs.map((item) => {
          return <Job key={item._id} {...item} />
        })}
      </div>
      {numOfPages > 1 ? <PageBtnContainer /> : null}
    </Wrapper>
  )
}

export default JobsContainer
