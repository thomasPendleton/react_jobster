import React from "react"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { Navbar, SmallSidebar, BigSidebar } from "../../components"

import Wrapper from "../../assets/wrappers/SharedLayout"

const SharedLayout = () => {
  const { isSidebarOpen } = useSelector((store) => store.user)
  return (
    <Wrapper>
      <main className="dashboard">
        {isSidebarOpen && <SmallSidebar />}
        <BigSidebar />
        <div className="">
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default SharedLayout
