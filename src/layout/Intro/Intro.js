import React, {useEffect} from "react";
import "./Intro.sass"

import {NavLink} from 'react-router-dom'

const Intro = (props) => {
    let  {
      handleCloseClick,
    } = props

    useEffect(() => {
      handleCloseClick()
    }, []);

    return (
        <header className={"header"}>
            <div className={'header__inner'}>
                <h1 className={'header__title'}>Чумаков Эдуард</h1>
                <p className={'header__subtitle'}>Frontend-разработчик</p>
            </div>
            <div className="header__nav">
                <NavLink
                    key={props.routes[1].path}
                    to={props.routes[1].path}
                    className={'header__link'}
                    activeClassName="active"
                    exact
                    onClick={props.handleOpenClick}
                >
                {props.routes[1].name}
                </NavLink>
                <NavLink
                    key={props.routes[2].path}
                    to={props.routes[2].path}
                    className={'header__link'}
                    activeClassName="active"
                    exact
                    onClick={props.handleOpenClick}
                >
                {props.routes[2].name}
                </NavLink>
            </div>
            <div className="header__git">
                <a className={'header__git-link'} href="https://github.com/Lirurin" target="_blank" rel="noopener noreferrer"> </a>
            </div>
        </header>
    )
}

export default Intro