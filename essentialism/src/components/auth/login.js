//Frameworks
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

//Actions
import { login } from '../../store/actions/index.js';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 6;
`;

const FormLogin = styled.form`
  width: 600px;
  margin: 100px auto;
  border: 1px solid black;
  box-shadow: -1px 3px 10px 1px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 20px;
  background-color: rgb(30, 30, 30);
  color: #959595;
`;

const H1LoginTitle = styled.h1`
  margin: 0 0 40px 0;
  text-align: center;
`;

const DivUsername = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-bottom: 20px;
`;

const H3Username = styled.h3`
  font-size: 30px;
  margin-right: 20px;
`;

const InputUsername = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  font-size: 24px;
  outline: none;
`;

const DivPassword = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-bottom: 20px;
`;

const H3Password = styled.h3`
  font-size: 30px;
  margin-right: 27px;
`;

const InputPassword = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  font-size: 24px;
  outline: none;
`;

const InputLoginButton = styled.input`
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
  margin-right: 50px;
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

const DivLogin = styled.div`
  display: flex;
`;

const H3FailLogMsg = styled.h3`
  color: red;

  ${props =>
    props.failedLogin === 'true'
      ? { visibility: 'visible' }
      : { visibility: 'hidden' }}
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidLogin: false,
      username: '',
      password: ''
    };
  }

  changeHandler = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  submitHandler = ev => {
    ev.preventDefault();
    // login with redux here...
    const credentials = {
      username: this.state.username,
      password: this.state.password
    };
    Promise.resolve(this.props.login(credentials)).then(() => {
      if (this.props.isLoggedIn()) {
        this.props.closeLoginModal(ev);
      } else {
        console.log('this.props.isLoggedIn() = ', this.props.isLoggedIn());
        this.setState({ invalidLogin: true });
      }
    });
  };

  render() {
    return (
      <DivWrapper onClick={ev => ev.stopPropagation()}>
        <FormLogin onSubmit={ev => this.submitHandler(ev)}>
          <H1LoginTitle>Welcome to React Instagram Clone</H1LoginTitle>
          <DivUsername>
            <H3Username>Username:</H3Username>
            <InputUsername
              className='login-usr-input'
              type='text'
              name='username'
              onChange={this.changeHandler}
            />
          </DivUsername>
          <DivPassword>
            <H3Password>Password:</H3Password>
            <InputPassword
              className='login-pwd-input'
              type='password'
              name='password'
              onChange={this.changeHandler}
            />
          </DivPassword>
          <DivLogin>
            <InputLoginButton
              className='login-btn'
              type='submit'
              placeholder='Login'
              value='Log In'
            />
            <H3FailLogMsg failedLogin={this.state.invalidLogin.toString()}>
              Invalid Username/Password
            </H3FailLogMsg>
          </DivLogin>
        </FormLogin>
      </DivWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { login }
)(LoginForm);
