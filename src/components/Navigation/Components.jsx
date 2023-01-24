import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    height: var(--nav-height);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
`

export const NavItem = styled.a`
    margin: 0 1rem;
    cursor: pointer;
`