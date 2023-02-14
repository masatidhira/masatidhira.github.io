import styled from "styled-components";

const Navigation = () => {
    const goToSection = (e) => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute('href'))
                . scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <Container>
            <NavItem href="#hero" onClick={(event) => goToSection(event)} data-text="HOME" >HOME</NavItem>
            <NavItem href="#about" onClick={(event) => goToSection(event)} data-text="ABOUT">ABOUT</NavItem>
            <NavItem href="#works" onClick={(event) => goToSection(event)} data-text="WORKS">WORKS</NavItem>
        </Container>
    )
}

const Container = styled.nav`
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
`

const NavItem = styled.a`
    margin: 0 1rem;
    cursor: pointer;
    position: relative;

    &::before, &:after {
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
`

export default Navigation;