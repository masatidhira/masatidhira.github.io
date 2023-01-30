import styled from "styled-components";

export const Works = styled.section`
    width: 100%;
    max-width: 768px;
    min-height: 100vh;
    margin: var(--nav-height) auto;
    padding: var(--nav-height) 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 2rem;
    position: relative;
`

export const Card = styled.div`
    width: 100%;
    height: 10rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
    border: 1px solid var(--clr-light); 
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        border-color: var(--clr-semi-light);
    }
`

export const WorkDate = styled.p`
    font-size: 0.8rem;
`

export const WorkName = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
`

export const WorkTag = styled.p`
    font-size: 0.8rem;
`