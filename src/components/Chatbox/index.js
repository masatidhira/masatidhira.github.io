import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { closeChatbox } from "../../features/chatbox/chatboxSlice";

const Chatbox = () => {
  const isOpen = useSelector((state) => state.chatbox.isOpen);
  const dispatch = useDispatch();

  console.log(isOpen);

  return (
    <Container isOpen={isOpen}>
      <ChatboxContent>
        <ChatboxHeader>
          <ProfileImage />
          <ProfileText>
            <p id="chatbox-name">Atidhira's Bot</p>
            <p id="chatbox-job">Student &#x2022; Programmer</p>
          </ProfileText>
          <CloseButton onClick={() => dispatch(closeChatbox())}>X</CloseButton>
        </ChatboxHeader>
        <Chat>A</Chat>
      </ChatboxContent>
    </Container>
  );
};

const Container = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  width: 90%;
  height: 90%;
  max-width: 300px;
  max-height: 450px;
  position: fixed;
  bottom: var(--nav-margin);
  right: var(--nav-margin);
  z-index: 101;
`;

const ChatboxContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: green;
  border-radius: 8px;
  overflow: hidden;
`;

const ChatboxHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: red;
`;

const ProfileText = styled.div`
  flex: 1 1 auto;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 4px;
  font-family: var(--font-text-reguler);

  #chatbox-name {
    font-size: var(--fs-reguler);
    margin-bottom: 2px;
  }
  #chatbox-job {
    font-size: 10px;
  }
`;

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-color-1);
  background: none;
  border: none;
`;

const Chat = styled.div`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
`;

export default Chatbox;
