import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Wrapper from "../assets/wrappers/Navbar"
import { FaHome, FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa"
import Logo from "./Logos"

const Navbar = () => {
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  console.log(user)
  return (
    <Wrapper>
      <Logo />
      <FaHome />
      <FaAlignLeft />
      <FaUserCircle />
      <FaCaretDown />
    </Wrapper>
  )
}

export default Navbar
