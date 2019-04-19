import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  background-color: rgba(243, 243, 243, 0.8);
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const Project = props => {
  const project_id = props.match.params.id;
  const project = props.myProjects[project_id - 1];
  console.log(props.myProjects);
  return (
    <DivWrapper>
      <h2>Project&nbsp;Name:&nbsp;{project.project_name}</h2>
      <h2>Active:&nbsp;{project.project_active ? 'YES' : 'NO'}</h2>
      <h2>Value&nbsp;Align:&nbsp;{project.proj_val_align}</h2>
    </DivWrapper>
  );
};

const mapStateToProps = state => {
  return {
    myProjects: state.projects.myProjects
  };
};

const RouterProject = withRouter(Project);

export default connect(
  mapStateToProps,
  {}
)(RouterProject);
