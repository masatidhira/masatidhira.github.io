import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { VscArrowUp } from "react-icons/vsc";
import { baseContainer, baseNavButton } from "./Header";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const toogleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toogleVisibility);
    return () => window.removeEventListener("scroll", toogleVisibility);
  }, []);

  return (
    <Container css={baseContainer}>
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

      <ArrowUp isVisible={isVisible} onClick={goUp}>
        <VscArrowUp size="1.3rem" />
      </ArrowUp>
    </Container>
  );
};

const Container = styled.footer`
  bottom: 0;
`;

const ArrowUp = styled.button`
  background: none;
  border: none;
  position: fixed;
  color: var(--text-color-1);
  bottom: var(--nav-margin);
  left: var(--nav-margin);
  cursor: pointer;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.5s;
  pointer-events: ${(props) => (props.isVisible ? "auto" : "none")};
`;

const Credit = styled.div`
  bottom: var(--nav-margin);
  right: var(--nav-margin);
`;

export default Footer;
