import styled from "styled-components"
import gif from "../../assets/gifs/noise.gif"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${gif});
    opacity: 0.04;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`