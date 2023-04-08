import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--clr-dark);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-index-loading);
`;

export const Text = styled.p`
  font-family: var(--font-text);
`;
