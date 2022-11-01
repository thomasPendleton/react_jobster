import React, { useState } from "react"
import { FormRow } from "../../components"
import Wrapper from "../../assets/wrappers/DashboardFormPage"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email:user?.email || '',
    lastName:user?.lastName || '',
    location:user?.location || '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submit")
  }
  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form">
        <h3>Profile</h3>
        <div className="form-center">
          <FormRow type="text" name="name" value={userData.name} />
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile
