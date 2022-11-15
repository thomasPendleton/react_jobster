import React from "react"
import Wrapper from "../assets/wrappers/StatItem"

const StatItem = ({ title, count, icon, color, bcg }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
        <h5 className="title">{title}</h5>
      </header>
    </Wrapper>
  )
}

export default StatItem
