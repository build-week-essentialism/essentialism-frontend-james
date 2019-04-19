//Frameworks
import React from 'react';
import styled from 'styled-components';
import ProjectsList from '../components/projectslist.js';
import { connect } from 'react-redux';

//Actions
import { getMyProjects } from '../store/actions/index.js';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  text-align: center;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myProjects: []
    };
  }

  componentDidMount() {
    Promise.resolve(this.props.getMyProjects()).then(() => {
      this.setState({ myProjects: this.props.myProjects });
    });
  }

  render() {
    const loggedIn = this.props.isLoggedIn();
    return (
      <DivWrapper>
        <h1>My Projects</h1>
        {loggedIn ? (
          <ProjectsList
            myProjects={this.state.myProjects}
            myProjectsLink={this.props.myProjectsLink}
          />
        ) : (
          <h1>Please Login....</h1>
        )}
      </DivWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    myProjects: state.projects.myProjects
  };
};

export default connect(
  mapStateToProps,
  { getMyProjects }
)(Projects);
