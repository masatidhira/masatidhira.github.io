import React from "react";
import styled from "styled-components/macro";
import { baseContainer, baseNavButton } from "./Header";

const Footer = () => {
  return (
    <Container css={baseContainer}>
      <ArrowUp>Arrow</ArrowUp>
      <Credit css={baseNavButton}>
        <p>
          <span>2</span>
          <span>0</span>
        </p>
        <p>
          <span>2</span>
          <span>2</span>
        </p>
      </Credit>
    </Container>
  );
};

const Container = styled.footer`
  bottom: 0;
`;

const ArrowUp = styled.button`
  background: none;
  border: none;
  position: fixed;
  color: var(--text-color-1);
  bottom: var(--nav-margin);
  right: var(--nav-margin);
  cursor: pointer;
`;

const Credit = styled.div`
  bottom: var(--nav-margin);
  left: var(--nav-margin);
`;

export default Footer;
