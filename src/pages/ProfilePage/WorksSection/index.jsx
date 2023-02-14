import styled from "styled-components";
import {About as Works, Title} from "../AboutSection"

const WorksSection = ({id, profileData}) => {
    return (
        <Works id={id}>
            <Title>WORKS</Title>
            {profileData.works.map((work, i) => (
                <Card key={i}>
                    <WorkDate>{work.date}</WorkDate>
                    <WorkName>{work.name}</WorkName>
                    <WorkTag>{work.tags.map(tag => "#" + tag + " ")}</WorkTag>
                    <WorkLink>Check project &gt;&gt;</WorkLink>
                </Card>
            ))}
        </Works>
    )
}

const Card = styled.div`
    width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: column;
    padding: 0.8rem;
    border: 1px solid var(--clr-light); 
    transition: 0.2s;
    position: relative;
`

const WorkDate = styled.p`
    font-size: 0.8rem;
`

const WorkName = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
`

const WorkTag = styled.p`
    font-size: 0.8rem;

`

const WorkLink = styled.a`
    font-size: 0.8rem;
    position: absolute;
    bottom: 0.4rem;
    right: 0.8rem;
    cursor: pointer;
`

export default WorksSection;