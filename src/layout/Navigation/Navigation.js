import React from 'react'
import "./Navigation.sass"
import {NavLink} from 'react-router-dom'

const Navigation = (props) => {
    return (
      <nav className={props.isNavOpen ? 'nav open': 'nav'}>
        <NavLink
          key={props.routes[0].path}
          to={props.routes[0].path}
          className={'nav__link'}
          activeClassName="active"
          onClick={props.handleCloseClick}
          exact
        />
        <NavLink
          key={props.routes[1].path}
          to={props.routes[1].path}
          className={'nav__link'}
          activeClassName="active"
          exact
        />
        <NavLink
          key={props.routes[2].path}
          to={props.routes[2].path}
          className={'nav__link'}
          activeClassName="active"
          exact
        />
        <span className={'nav__frame'}>with</span> 
      </nav>
    )
}

export default Navigation