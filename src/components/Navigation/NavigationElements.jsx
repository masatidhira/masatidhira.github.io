import styled from 'styled-components';

export const Container = styled.nav`
  background-color: var(--clr-dark);
  width: 100%;
  height: var(--nav-height);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;

export const NavItem = styled.a`
  margin: 0 1rem;
  cursor: pointer;
  position: relative;

  &::before,
  &:after {
    content: attr(data-text);
    position: absolute;
    opacity: 0.6;
    z-index: -1;
  }

  &:before {
    top: -2px;
    right: -2px;
    color: var(--clr-blue);
  }

  &:after {
    bottom: -2px;
    left: -2px;
    color: var(--clr-red);
  }
`;
