import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(243, 243, 243, 0.5);
`;

const H3ProjectTitle = styled.h3`
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  padding: 25px 0;
  margin: 0;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: rgb(243, 243, 243);
    cursor: pointer;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const ProjectsList = props => {
  return (
    <DivWrapper>
      {props.myProjects.length === 0 ? (
        <h3>You have no projects</h3>
      ) : (
        props.myProjects.map(project => {
          return (
            <H3ProjectTitle
              key={project.id}
              onClick={() =>
                props.history.push(`${props.myProjectsLink}/${project.id}`)
              }
            >
              {project.project_name}
            </H3ProjectTitle>
          );
        })
      )}
    </DivWrapper>
  );
};

export default withRouter(ProjectsList);
