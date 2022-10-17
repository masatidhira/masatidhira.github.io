import React from "react"
import styled, { css } from "styled-components/macro"
import { Link } from "react-router-dom"
import { baseContainer, baseNavButton } from "./Header"


const Footer = () => {
    return (
        <Container css={baseContainer}>
            <Email 
                to="#"
                onClick={(e) => {
                    window.location.href = "mailto: masatidhira@gmail.com";
                    e.preventDefault();
                }}
                css={baseNavButton}
            >
                <p>
                    <span>E</span>
                    <span>M</span>
                    <span>A</span>
                </p>
                <p>
                    <span>I</span>
                    <span>L</span>
                </p>
            </Email>
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
        </Container>
    );
}


const Container = styled.footer`
    bottom: 0;
`

const Email = styled(Link)`
    bottom: 4vw;
    left: 4vw;
`

const Credit = styled.div`
    bottom: 4vw;
    right: 4vw;
`

export default Footer;