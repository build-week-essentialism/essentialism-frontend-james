import React from 'react';
import styled from 'styled-components';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-bottom: 100px;
  background-color: rgba(243, 243, 243, 0.5);
  h2 {
    text-align: center;
  }
`;

const DivSeperator = styled.div`
  display: flex;
  width: 400px;
  flex-direction: row;
  justify-content: center;

  div,
  hr,
  h2 {
    display: inline-block;
    vertical-align: middle;
  }

  hr {
    width: 150px;
    background-color: black;
    height: 2px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
  }
`;

const Button = styled.button`
  font-size: 40px;
  width: 40%;
  border-radius: 10px;
  font-weight: 600;
  background: linear-gradient(to top, #89640b, #e0ac32);
  border-color: #e0ac32;
  color: white;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  outline: none;
  cursor: pointer;
  &:hover {
    outline: 0;
    background: radial-gradient(
      ellipse at top,
      rgb(255, 255, 255) 0%,
      rgb(229, 193, 0) 50%,
      rgb(245, 166, 35) 100%
    );
    transition: opacity 2s ease-in;
    color: rgb(251, 244, 209);
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const HomeSignIn = props => {
  return (
    <DivWrapper>
      <h2>Please</h2>
      <Button type='button' onClick={ev => props.raiseLoginModal(ev)}>
        Login
      </Button>
      <DivSeperator>
        <div>
          <hr />
          <h2>&nbsp;OR&nbsp;</h2>
          <hr />
        </div>
      </DivSeperator>
      <Button type='button'>Register</Button>
    </DivWrapper>
  );
};

export default HomeSignIn;
