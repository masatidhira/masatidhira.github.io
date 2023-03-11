import { Container, NavItem } from './NavigationElements';

export default function Navigation() {
  const goToSection = (e) => {
    e.preventDefault();
    document
      .querySelector(e.target.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container>
      <NavItem
        href="#hero"
        onClick={(event) => goToSection(event)}
        data-text="HOME"
      >
        HOME
      </NavItem>
      <NavItem
        href="#about"
        onClick={(event) => goToSection(event)}
        data-text="ABOUT"
      >
        ABOUT
      </NavItem>
      <NavItem
        href="#works"
        onClick={(event) => goToSection(event)}
        data-text="WORKS"
      >
        WORKS
      </NavItem>
    </Container>
  );
}
