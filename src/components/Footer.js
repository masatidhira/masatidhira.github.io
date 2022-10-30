import React from "react";
import styled from "styled-components/macro";
import { useDispatch } from "react-redux";
import { openChatbox } from "../features/chatbox/chatboxSlice";
import { baseContainer, baseNavButton } from "./Header";

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <Container css={baseContainer}>
      <Email css={baseNavButton} onClick={() => dispatch(openChatbox())}>
        <p>
          <span>C</span>
          <span>H</span>
          <span>A</span>
          <span>T</span>
        </p>
        <p>
          <span>M</span>
          <span>E</span>
        </p>
      </Email>
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

const Email = styled.button`
  background: none;
  border: none;
  bottom: var(--nav-margin);
  right: var(--nav-margin);
  ::before {
    left: unset !important;
    right: 0;
  }
  cursor: pointer;
`;

const Credit = styled.div`
  bottom: var(--nav-margin);
  left: var(--nav-margin);
`;

export default Footer;
