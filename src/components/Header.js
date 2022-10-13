import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"


const Header = () => {
    return (
        <Container>
            <LeftLink to="/">
                <P>
                    <span>H</span>
                    <span>O</span>
                </P>
                <P>
                    <span>M</span>
                    <span>E</span>
                </P>
            </LeftLink>
            <RightLink to="/project">
                <P>
                    <span>P</span>
                    <span>R</span>
                    <span>O</span>
                </P>
                <P>
                    <span>J</span>
                    <span>E</span>
                    <span>C</span>
                    <span>T</span>
                </P>
            </RightLink>
        </Container>
    );
}

const Container = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: auto;
    display: flex;
    z-index: 100;
`

const HeaderLink = styled(Link)`
    position: fixed;
    top: 4vw;
    color: #000;
    text-decoration: none;
    min-width: 2ch;
    display: flex;
    flex-direction: column;

    @media (min-width: 375px) {
        min-width: 2.5ch;
    }
`

const LeftLink = styled(HeaderLink)`
    left: 4vw;
`

const RightLink = styled(HeaderLink)`
    right: 4vw;
`

export const P = styled.p`
    font-size: 10px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: space-between;

    @media (min-width: 375px) {
        font-size: 12px;
    }
`

export default Header;