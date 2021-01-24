import { email } from '@config';
import PropTypes from 'prop-types';
import { useUserDataContext } from '@contexts/user-data';
import Social from '../Social';
import {
  StyledHeroSection,
  StyledBigTitle,
  StyledPic,
  LeftContainer,
  RightContainer,
} from './styles';

const Hero = ({ name = '', bio = '' }) => {
  const { user } = useUserDataContext();
  return (
    <StyledHeroSection>
      <LeftContainer>
        <h1>Welcome, I&apos;m</h1>
        <StyledBigTitle>{name}</StyledBigTitle>
        <p>{bio}</p>
        <a href={`mailto:${email}`} className="email-link">
          Get In Touch
        </a>
      </LeftContainer>
      <RightContainer>
        <StyledPic>
          <div className="wrapper">
            <img
              width={300}
              height={300}
              src={user.photo || user.avatar_url || user.profile_image}
              alt={`${user?.name} profile`}
              className="img"
            />
          </div>
        </StyledPic>
        <Social className="social-networks" />
      </RightContainer>
    </StyledHeroSection>
  );
};
Hero.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
};
export default Hero;
