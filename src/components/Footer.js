import React from "react";
import styled from "styled-components/macro";
import { useDispatch } from "react-redux";
import { SlBubble } from "react-icons/sl";
import { openChatbox } from "../features/chatbox/chatboxSlice";
import { baseContainer, baseNavButton } from "./Header";

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <Container css={baseContainer}>
      <ChatBox onClick={() => dispatch(openChatbox())}>
        <SlBubble size={20} />
      </ChatBox>
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

const ChatBox = styled.button`
  background: none;
  border: none;
  position: fixed;
  color: var(--text-color-1);
  bottom: var(--nav-margin);
  right: var(--nav-margin);
  cursor: pointer;
  transform: scale(-1, 1);
`;

const Credit = styled.div`
  bottom: var(--nav-margin);
  left: var(--nav-margin);
`;

export default Footer;
