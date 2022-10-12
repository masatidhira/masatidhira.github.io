import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"


const Header = () => {
    return (
        <Container>
            <LeftLink to="/">PROFILE</LeftLink>
            <RightLink to="/project">PROJECT</RightLink>
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
    font-size: 14px;
`

const LeftLink = styled(HeaderLink)`
    left: 4vw;
`

const RightLink = styled(HeaderLink)`
    right: 4vw;
`


export default Header;