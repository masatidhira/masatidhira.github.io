import { Container, NavItem } from "./Components";

const Navigation = () => {
    const goToSection = (e) => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute('href'))
                . scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <Container>
            <NavItem href="#home" onClick={(event) => goToSection(event)}>HOME</NavItem>
            <NavItem href="#about" onClick={(event) => goToSection(event)}>ABOUT</NavItem>
            <NavItem href="#works" onClick={(event) => goToSection(event)}>WORKS</NavItem>
        </Container>
    )
}

export default Navigation;