import React from "react"
import styled from "styled-components"


const HomePage = () => {
    return (
        <Container>
            <BannerContainer>
                <Banner>
                    <h1>
                        <span>WEBSITE</span>
                        <span>DEVELOPER</span>
                    </h1>
                    <BannerImage></BannerImage>
                    <h2>
                        <span>ATIDHIRA</span>
                        <span>HABIBILLAH</span>
                    </h2>
                    <ScrollIcon>scroll down</ScrollIcon>
                </Banner>
                <ScrollIcon></ScrollIcon>
            </BannerContainer>
            <BioContainer>
                BIODATA
            </BioContainer>
        </Container>
    )
}

const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: #eee;
    padding: 0 4vw;
`;

const BannerContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const Banner = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    
    h1, h2 {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 2rem 0;
        line-height: 2.5rem;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        text-align: right;
    }
`

const BannerImage = styled.div`
    width: 70vw;
    height: 40vw;
    background-color: royalblue;
`

const ScrollIcon = styled.div`
    position: absolute;
    bottom: 12px;
    left: 0;
    width: 100%;
    font-size: 0.6rem;
    color: gray;
    text-align: center;
`

const BioContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default HomePage;
