import React from "react"
import Wrapper from "../assets/wrappers/SmallSidebar"
import { FaTimes } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { toggleSidebar } from "../features/user/userSlice"
import Logo from "./Logos"
import { useDispatch, useSelector } from "react-redux"

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button
            className="close-btn"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
            <div className="nav-links">nav links</div>
          </header>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar
