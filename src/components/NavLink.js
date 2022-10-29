import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const NavLink = ({ to, label, pos }) => {
  return (
    <StyledNavLink to={to} pos={pos}>
      {label.map((str, i) => (
        <p key={i}>
          {str.split("").map((ch, j) => (
            <span key={j}>{ch}</span>
          ))}
        </p>
      ))}
    </StyledNavLink>
  );
};

const StyledNavLink = styled(Link)`
  position: fixed;
  color: var(--text-color-1);
  text-decoration: none;
  min-width: 4ch;
  display: flex;
  flex-direction: column;
  top: var(--nav-margin);
  left: ${(props) => (props.pos === "left" ? "var(--nav-margin)" : "unset")};
  right: ${(props) => (props.pos === "right" ? "var(--nav-margin)" : "unset")};

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
    left: ${(props) => (props.pos === "left" ? "0" : "unset")};
    right: ${(props) => (props.pos === "right" ? "0" : "unset")};
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

export default NavLink;
