import { About as Works, Title } from '../AboutSection/AboutElements';
import { Card, WorkDate, WorkName, WorkTag, WorkLink } from './WorksElements';

export default function WorksSection({ id, profileData }) {
  return (
    <Works id={id}>
      <Title>WORKS</Title>
      {profileData.works.map((work, i) => (
        <Card key={i}>
          <WorkDate>{work.date}</WorkDate>
          <WorkName>{work.name}</WorkName>
          <WorkTag>{work.tags.map((tag) => '#' + tag + ' ')}</WorkTag>
          <WorkLink>Check project &gt;&gt;</WorkLink>
        </Card>
      ))}
    </Works>
  );
}
