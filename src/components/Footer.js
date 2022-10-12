import React from "react"
import styled from "styled-components"


const Footer = () => {
    return (
        <Container>
            <Email>EMAIL</Email>
            <Credit>2022</Credit>
        </Container>
    );
}

const Container = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: auto;
    display: flex;
    z-index: 100;
`

const Email = styled.p`
    position: fixed;
    bottom: 4vw;
    left: 4vw;
`

const Credit = styled.p`
    position: fixed;
    bottom: 4vw;
    right: 4vw;
`

export default Footer;