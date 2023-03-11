import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  border: 1px solid var(--clr-light);
  transition: 0.2s;
  position: relative;
`;

export const WorkDate = styled.p`
  font-size: 0.8rem;
`;

export const WorkName = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const WorkTag = styled.p`
  font-size: 0.8rem;
`;

export const WorkLink = styled.a`
  font-size: 0.8rem;
  position: absolute;
  bottom: 0.4rem;
  right: 0.8rem;
  cursor: pointer;
`;
