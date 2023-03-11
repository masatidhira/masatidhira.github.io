import {
  Hero,
  HeadingWrapper,
  Heading,
  ScrollDown,
  ImageWrapper,
  Image,
  AuthorName,
} from './HeroElements';
import ImgProfile from '../../../assets/images/img-profile.jpeg';

export default function HeroSection({ id, profileData }) {
  return (
    <Hero id={id}>
      <HeadingWrapper>
        <Heading isTop={true}>{profileData.headingText}</Heading>
        <Heading>{profileData.headingText}</Heading>
        <Heading>{profileData.headingText}</Heading>
        <Heading>{profileData.headingText}</Heading>
        <ScrollDown />
      </HeadingWrapper>
      <ImageWrapper>
        <Image src={ImgProfile} />
        <AuthorName>{profileData.authorName}</AuthorName>
      </ImageWrapper>
    </Hero>
  );
}
