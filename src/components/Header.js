import React from "react"
import {Link} from "react-router-dom"
import styled, { css } from "styled-components/macro"


const Header = () => {
    return (
        <Container css={baseContainer}>
            <LeftLink to="/" css={baseNavButton}>
                <p>
                    <span>H</span>
                    <span>O</span>
                </p>
                <p>
                    <span>M</span>
                    <span>E</span>
                </p>
            </LeftLink>
            <RightLink to="/project" css={baseNavButton}>
                <p>
                    <span>P</span>
                    <span>R</span>
                    <span>O</span>
                </p>
                <p>
                    <span>J</span>
                    <span>E</span>
                    <span>C</span>
                    <span>T</span>
                </p>
            </RightLink>
        </Container>
    );
}

export const baseContainer = css`
    position: absolute;
    left: 0;
    width: 100%;
    height: auto;
    display: flex;
    z-index: 100;
`

export const baseNavButton = css`
    position: fixed;
    color: var(--text-color-1);
    text-decoration: none;
    min-width: 2.5ch;
    display: flex;
    flex-direction: column;

    p {
        font-family: "Montserrat", sans-serif;
        font-size: 10px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: space-between;
    }

    @media (min-width: 375px) {
        min-width: 3ch;

        p {
            font-size: 12px;
        }
    }
`

const Container = styled.header`
    top: 0;
`

const HeaderLink = styled(Link)`
    top: var(--nav-margin);
`

const LeftLink = styled(HeaderLink)`
    left: var(--nav-margin);
`

const RightLink = styled(HeaderLink)`
    right: var(--nav-margin);
`

export default Header;