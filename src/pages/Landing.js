import React from "react"
import Wrapper from "../assets/wrappers/LandingPage"
import logo from "../assets/images/logo.svg"
import main from "../assets/images/main.svg"

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobster logo" className="logo" />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Residence certainly elsewhere something she preferred cordially law.
            Age his surprise formerly mrs perceive few stanhill moderate. Of in
            power match on truth worse voice would. Large an it sense shall an
            match learn.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
