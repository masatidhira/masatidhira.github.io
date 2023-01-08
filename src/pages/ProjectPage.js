import React from "react";
import styled from "styled-components";
import { Container as ProfileContainer } from "./ProfilePage";
import { SectionTitle, SectionParagraph } from "../components/TextField";

const ProjectPage = () => {
  return (
    <Container>
      <SectionTitle>PROJECT</SectionTitle>
      <SectionParagraph>This page is under construction :)</SectionParagraph>
    </Container>
  );
};

const Container = styled(ProfileContainer)`
  justify-content: center;
`;

export default ProjectPage;
