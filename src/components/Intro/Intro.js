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
        <header className={"Intro"}>
            <div className={'Intro__inner'}>
                <h1 className={'Intro__title'}>Чумаков Эдуард</h1>
                <p className={'Intro__subtitle'}>Frontend-разработчик</p>
            </div>
            <div className="Intro__nav">
                <NavLink
                    key={props.routes[1].path}
                    to={props.routes[1].path}
                    className={'Intro__link'}
                    activeClassName="active"
                    exact
                    onClick={props.handleOpenClick}
                >
                {props.routes[1].name}
                </NavLink>
                <NavLink
                    key={props.routes[2].path}
                    to={props.routes[2].path}
                    className={'Intro__link'}
                    activeClassName="active"
                    exact
                    onClick={props.handleOpenClick}
                >
                {props.routes[2].name}
                </NavLink>
            </div>
            <div className="Intro__git">
                <a className={'Intro__git-link'} href="https://github.com/Lirurin" target="_blank" rel="noopener noreferrer"> </a>
            </div>
        </header>
    )
}

export default Intro