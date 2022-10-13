import React from "react"
import styled from "styled-components"
import { P } from "./Header"


const Footer = () => {
    return (
        <Container>
            <Email>
                <P>
                    <span>E</span>
                    <span>M</span>
                    <span>A</span>
                </P>
                <P>
                    <span>I</span>
                    <span>L</span>
                </P>
            </Email>
            <Credit>
                <P>
                    <span>2</span>
                    <span>0</span>
                </P>
                <P>
                    <span>2</span>
                    <span>2</span>
                </P>
            </Credit>
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

const Email = styled.div`
    position: fixed;
    bottom: 4vw;
    left: 4vw;
    color: #000;
    min-width: 2ch;

    @media (min-width: 375px) {
        min-width: 2.5ch;
    }
`

const Credit = styled(Email)`
    right: 4vw;
    left: unset;
`

export default Footer;