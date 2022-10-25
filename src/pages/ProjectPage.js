import React from "react";
import styled from "styled-components";

const ProjectPage = () => {
  return (
    <Container>
      <h1>PROJECT</h1>
      <p>This page is under construction :)</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
