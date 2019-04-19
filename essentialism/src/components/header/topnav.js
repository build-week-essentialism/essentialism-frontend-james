//Frameworks
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//components

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  background-color: black;
  color: white;

  h3 {
    display: flex;
    align-items: center;
    margin-right: 25px;

    &:first-child {
      margin-left: 25px;
    }
  }
`;

const Login = styled.a`
  display: flex;
  border-left: 1px solid white;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: white;
    color: black;
    transition: all 0.2s ease-in;
  }
`;

const Logout = styled.a`
  display: flex;
  border-left: 1px solid white;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: white;
    color: black;
    transition: all 0.2s ease-in;
  }
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: white;
    color: black;
    transition: all 0.2s ease-in;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const TopNav = props => {
  const loggedIN = props.isLoggedIn();
  return (
    <DivWrapper>
      <NavItem to={props.homeLink}>
        <h3>Home</h3>
      </NavItem>
      <NavItem to={props.homeLink}>
        <h3>New&nbsp;Project</h3>
      </NavItem>
      <NavItem to={props.myProjectsLink}>
        <h3>My&nbsp;Projects</h3>
      </NavItem>
      <NavItem to='/'>
        <h3>Values</h3>
      </NavItem>
      <NavItem to='/'>
        <h3>My&nbsp;Values</h3>
      </NavItem>
      {loggedIN ? (
        <Logout onClick={ev => props.logout(ev)}>
          <h3>Logout</h3>
        </Logout>
      ) : (
        <Login onClick={ev => props.raiseLoginModal(ev)}>
          <h3>Login</h3>
        </Login>
      )}
    </DivWrapper>
  );
};

export default TopNav;
