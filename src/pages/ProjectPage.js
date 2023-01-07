import React from "react";
import styled from "styled-components";
import { Container as ProfileContainer } from "./ProfilePage";

const ProjectPage = () => {
  return (
    <Container>
      <h1>PROJECT</h1>
      <p>This page is under construction :)</p>
    </Container>
  );
};

const Container = styled(ProfileContainer)`
  justify-content: center;

  h1 {
    font-family: var(--font-text-medium);
    margin-bottom: 24px;
  }

  p {
    font-family: var(--font-text-reguler);
  }
`;

export default ProjectPage;
