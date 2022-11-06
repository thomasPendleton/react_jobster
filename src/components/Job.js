import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/Job"
import { useDispatch } from "react-redux"

const Job = ({
  _id,
  company,
  position,
  status,
  jobType,
  jobLocation,
  createdAt,
}) => {
  const dispatch = useDispatch()



  return <Wrapper>
    <header>
      <div className="main-icon">{company.charAt(0)}</div>
    </header>
  </Wrapper>



  
}

export default Job
