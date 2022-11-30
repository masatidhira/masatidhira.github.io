import styled from "styled-components";

export const ChatboxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
`;

export const ChatboxHeader = styled.div`
  height: 6rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background-color: royalblue;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: red;
`;

export const ProfileText = styled.div`
  flex: 1 1 auto;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.6rem;
  font-family: var(--font-text-reguler);

  #chatbox-name {
    font-size: 1rem;
    letter-spacing: 1px;
    margin-bottom: 2px;
  }

  #chatbox-job {
    font-size: 0.7rem;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-color-1);
  font-size: 1.5rem;
`;

export const Chat = styled.div`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
`;
