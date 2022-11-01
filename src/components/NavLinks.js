import { NavLink } from "react-router-dom"
import links from "../utils/links"

const NavLinks = ({toggleSidebar}) => {
  return (
    
      <div className="nav-links">
        {links.map((item) => {
          const { id, text, path, icon } = item

          return (
            <NavLink
              to={path}
              key={id}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={toggleSidebar}
            >
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          )
        })}
      </div>
  
  )
}

export default NavLinks
