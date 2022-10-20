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
                        <span>Atidhira</span>
                        <span>Habibillah</span>
                    </h2>
                </Banner>
                <ScrollIcon>scroll down</ScrollIcon>
            </BannerContainer>
            <BioContainer>
                <p>Hello!</p>
                <p>
                    My name is Atidhira Habibillah, an Informatic Engineering student from Indonesia.
                </p>
                <p>
                    I love to code. I've start my journey of learning to code since 2021, but i can't say that i'm an expert yet, i still have a lot of things to learn. 
                </p>
                <p>
                    My dream is to become a website developer and front-end engineer and win an award for website i'have created. 
                </p>
                <p>
                    If you need my help, or just want to say hi, feel free to contact me :)
                </p>
                
            </BioContainer>
        </Container>
    )
}

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
`

const BannerContainer = styled.section`
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 var(--nav-margin);
`

const Banner = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
    h1, h2 {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 2rem 0;
    }

    h1 {
        font-family: "ItRemark", serif !important;
        font-size: 3rem;
        line-height: 2.5rem;
        letter-spacing: 2px;
    }

    h2 {
        font-family: "BrushFlower", sans-serif !important;
        font-size: 1.7rem;
        letter-spacing: 3px;
        line-height: 3rem;
        text-align: right;
        transform: rotate(-20deg);
    }
`

const BannerImage = styled.div`
    width: 65vw;
    height: 40vw;
    max-width: 325px;
    max-height: 200px;
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
    min-height: 100vh;
    padding: 3rem var(--nav-margin);

    p {
        font-family: "Montserrat", sans-serif;
        font-size: 12px;
        line-height: 1.2rem;
        padding-bottom: 1rem;
    }
`

export default HomePage;
