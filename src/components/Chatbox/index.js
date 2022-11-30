import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { closeChatbox } from "../../features/chatbox/chatboxSlice";
import {
  ChatboxContainer,
  ChatboxHeader,
  ProfileImage,
  ProfileText,
  CloseButton,
  Chat,
} from "./ChatboxElements";

const Chatbox = () => {
  const isOpen = useSelector((state) => state.chatbox.isOpen);
  const dispatch = useDispatch();

  return (
    <ChatboxContainer isOpen={isOpen}>
      <ChatboxHeader>
        <ProfileImage />
        <ProfileText>
          <p id="chatbox-name">Atidhira's Bot</p>
          <p id="chatbox-job">Student &#x2022; Programmer</p>
        </ProfileText>
        <CloseButton onClick={() => dispatch(closeChatbox())}>X</CloseButton>
      </ChatboxHeader>
      <Chat>A</Chat>
    </ChatboxContainer>
  );
};

export default Chatbox;
