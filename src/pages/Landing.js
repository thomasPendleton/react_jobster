import React from "react"
import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/LandingPage"
import { Logo } from "../components"
import main from "../assets/images/team_up.svg"

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
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
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
