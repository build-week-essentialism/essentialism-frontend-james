//Globals
import {
  viewContainerHeight,
  viewContainerTopOrBottomPaddingPx,
  headerHeight
} from './globals/styles.js';

//Frameworks
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

//Components
import Header from './components/header/header.js';
import LoginModal from './components/modals/loginmodal.js';
import Home from './views/home.js';
import Projects from './views/projects.js';
import Project from './components/project.js';
import background_img from './assets/background.jpg';

/***************************************************************************************************
 ********************************************* Variables *******************************************
 **************************************************************************************************/
const isTestServerOn = true;
export const server_url = isTestServerOn
  ? 'http://localhost:5000'
  : 'https://essentialism.herokuapp.com';

const urlLinks = {
  home: '/',
  newProject: '/new-project',
  myProjects: '/my-projects',
  browseValues: '/browse-values',
  myValues: '/my-values'
};

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/

const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${background_img});
  background-position: center;
  background-size: cover;
  z-index: 2;
`;

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    background-color: rgb(243, 243, 243);
    min-height: 100vh;
  }
`;

const DivHeaderTopSpace = styled.div`
  margin-top: ${headerHeight};
`;

const DivViewsContainer = styled.div`
  max-width: 800px;
  min-height: ${viewContainerHeight};
  width: 100%;
  margin: 0 auto;
  padding: ${viewContainerTopOrBottomPaddingPx};
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoginModalRaised: false
    };
  }

  raiseLoginModal = ev => {
    this.setState({ isLoginModalRaised: true });
  };

  closeLoginModal = ev => {
    this.setState({ isLoginModalRaised: false });
  };

  isLoggedIn() {
    return localStorage.getItem('token') && localStorage.getItem('user_id')
      ? true
      : false;
  }

  logout = ev => {
    ev.preventDefault();
    localStorage.clear();
    this.props.history.push(`${urlLinks.home}`);
  };

  render() {
    return (
      <DivWrapper>
        <GlobalStyle />
        <DivHeaderTopSpace />
        <Header
          isLoggedIn={this.isLoggedIn}
          logout={this.logout}
          raiseLoginModal={this.raiseLoginModal}
          homeLink={`${urlLinks.home}`}
          myProjectsLink={`${urlLinks.myProjects}`}
        />
        {this.state.isLoginModalRaised && (
          <LoginModal
            closeLoginModal={this.closeLoginModal}
            isLoggedIn={this.isLoggedIn}
          />
        )}
        <DivViewsContainer>
          <Route
            exact
            path={`${urlLinks.home}`}
            render={() => (
              <Home
                isLoggedIn={this.isLoggedIn}
                raiseLoginModal={this.raiseLoginModal}
              />
            )}
          />
          <Route
            exact
            path={`${urlLinks.myProjects}`}
            render={() => (
              <Projects
                isLoggedIn={this.isLoggedIn}
                myProjectsLink={`${urlLinks.myProjects}`}
              />
            )}
          />
          <Route
            exact
            path={`${urlLinks.myProjects}/:id`}
            render={() => <Project isLoggedIn={this.isLoggedIn} />}
          />
        </DivViewsContainer>
      </DivWrapper>
    );
  }
}

export default App;
