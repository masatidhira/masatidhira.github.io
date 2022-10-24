import React from "react"
import styled, { css } from "styled-components/macro"
import { baseContainer, baseNavButton } from "./Header"


const Footer = () => {
    return (
        <Container css={baseContainer}>
            <Email 
                href="mailto:masatidhira@gmail.com"
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

const Email = styled.a`
    bottom: var(--nav-margin);
    left: var(--nav-margin);
`

const Credit = styled.div`
    bottom: var(--nav-margin);
    right: var(--nav-margin);
`

export default Footer;