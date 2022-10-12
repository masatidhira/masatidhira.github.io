import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"


const Header = () => {
    return (
        <Container>
            <LeftLink to="/">
                <P>HO</P>
                <P>ME</P>
            </LeftLink>
            <RightLink to="/project">
                <P>PRO</P>
                <P>JECT</P>
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
    background-color: blueviolet;
    display: flex;
    flex-direction: column;
`

const LeftLink = styled(HeaderLink)`
    left: 4vw;
`

const RightLink = styled(HeaderLink)`
    right: 4vw;
`

const P = styled.p`
    font-size: 14px;
`

export default Header;