import React from "react"
import styled from "styled-components"


const HomePage = () => {
    return (
        <Container>
            <h1>HELLO</h1>
        </Container>
    )
}

const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default HomePage;
