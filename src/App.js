import React from 'react';
import Intro from './layout/Intro/Intro'
import Works from './components/Works/Works';
import { CSSTransition } from "react-transition-group";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.sass';
import Navigation from './layout/Navigation/Navigation';
import Contacts from './components/Contacts/Contacts'
//images
import cardVolt from "./images/voltonov.jpg"
import cardTaxi from "./images/taxi.jpg"
import cardGlitch from "./images/glitch.jpg"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      routes: [
        { path: '/', name: 'header', Component: Intro },
        { path: '/works', name: 'Работы', Component: Works },
        { path: '/contacts', name: 'Контакты', Component: Contacts },
      ],
      cards: [
        {
          website: 'voltonov',
          url: 'https://voltonov.ru',
          gitUrl: 'https://voltonov.ru',
          description: 'Интернет-магазин светильников и комплектующих',
          task: 'Верстка мобильной версии, правки десктоп-версии',
          status: 'Доступен',
          cardImg: cardVolt,
          // vue: false
        },
        {
          website: 'taxi-ubk',
          url: 'https://voltonov.ru',
          gitUrl: 'https://voltonov.ru',
          description: 'Landing Page междугороднего такси по Крыму',
          task: 'Верстка страницы',
          status: 'Недоступен',
          cardImg: cardTaxi,
          // vue: false
        },
        {
          website: 'glitch',
          url: 'https://voltonov.ru',
          gitUrl: 'https://voltonov.ru',
          description: 'Пример работы. Интернет-магазин одежды в стиле "киберпанк"',
          task: 'Верстка страницы',
          status: 'Доступен',
          cardImg: cardGlitch,
          // vue: false
        },
        // {
        //   website: 'symphony',
        //   url: 'https://voltonov.ru',
        //   gitUrl: 'https://voltonov.ru',
        //   description: 'Пример работы. Landing Page ресторана итальянской кухни',
        //   task: 'Верстка страницы',
        //   status: 'Доступен',
        //   cardImg: cardVolt,
        //   // vue: true
        // },
      ],
      isNavOpen: false,
    }
  }

  componentDidMount() {
    // mobile browsers 100vh fix
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }

  handleOpenClick() {
    if (!this.state.isNavOpen) {
      this.setState((state, props) => ({
        isNavOpen: true
      }))
    }
  }

  handleCloseClick() {
    this.setState((state, props) => ({
      isNavOpen: false,
    }))
  }


  render() {
      return (
        <div className="App">
          <Router>
            <Navigation 
              isNavOpen={this.state.isNavOpen} 
              isNavChanges={this.state.isNavChanges} 
              routes={this.state.routes} 
              handleCloseClick={this.handleCloseClick.bind(this)}
            />
            <div className={'cont'}>
              <Route key={this.state.routes[0].path} exact path={this.state.routes[0].path}>
                {({ match }) => (
                  <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames="page"
                      unmountOnExit
                  >
                    <div className="page">
                        <Intro handleCloseClick={this.handleCloseClick.bind(this)} handleOpenClick={this.handleOpenClick.bind(this)} routes={this.state.routes} />
                    </div>
                  </CSSTransition>
                )}
              </Route>
              <Route key={this.state.routes[1].path} exact path={this.state.routes[1].path}>
                {({ match }) => (
                  <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames="page--works"
                      unmountOnExit
                  >
                    <div className="page page--works">
                        <Works handleCloseClick={this.handleCloseClick.bind(this)} handleOpenClick={this.handleOpenClick.bind(this)} cards={this.state.cards} />
                    </div>
                  </CSSTransition>
                )}
              </Route>
              <Route key={this.state.routes[2].path} exact path={this.state.routes[2].path}>
                {({ match }) => (
                  <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames="page"
                      unmountOnExit
                  >
                    <div className="page">
                        <Contacts handleCloseClick={this.handleCloseClick.bind(this)} handleOpenClick={this.handleOpenClick.bind(this)} routes={this.state.routes} />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
