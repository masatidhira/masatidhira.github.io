import React from "react";
import styled, { css } from "styled-components/macro";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <Container css={baseContainer}>
      <NavLink to="/" label={["PRO", "FILE"]} pos="left" />
      <NavLink to="/project" label={["PRO", "JECT"]} pos="right" />
    </Container>
  );
};

export const baseContainer = css`
  position: absolute;
  left: 0;
  width: 100%;
  height: auto;
  display: flex;
  z-index: var(--z-index-nav);
`;

export const baseNavButton = css`
  position: fixed;
  color: var(--text-color-1);
  text-decoration: none;
  min-width: 4ch;
  display: flex;
  flex-direction: column;

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 10px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: space-between;
  }

  ::before {
    content: "";
    width: 0;
    height: 4px;
    background-color: blue;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(-2px);
    opacity: 0.8;
    z-index: -1;
    transition: width 0.3s;
  }

  &:hover {
    ::before {
      width: 130%;
    }
  }

  @media (min-width: 375px) {
    p {
      font-size: 12px;
    }
  }
`;

const Container = styled.header`
  top: 0;
`;

export default Header;
