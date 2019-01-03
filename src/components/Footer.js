import React from 'react';
import styled from 'styled-components';
import { Text, Flex, Box } from 'rebass';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import ContentfulLogo from './Logo/Contenful.svg';
import GatsbyLogo from './Logo/Gatsby.svg';

const FooterContainer = styled.footer`
  padding: 1em;
  background: ${props => props.theme.colors.backgroundDark};
  color: ${props => props.theme.colors.background};
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RenponsiveLogo = styled.img`
  width: 100px;
  height: 25px;

  @media (min-width: 400px) {
    width: 150px;
    height: 35px;
  }
`;

const Credit = styled.a`
  font-size: 1rem;
  color: ${props => props.theme.colors.secondaryLight};
  text-decoration: none;
  transition: all 250ms;
  &:hover {
    color: ${props => props.theme.colors.primaryColor};
  }
`

const Logo = ({ url, logo, alt = '' }) => (
  <Box>
    <a href={url} rel="noopener noreferrer" target="_blank">
      <RenponsiveLogo src={logo} alt={alt} />
    </a>
  </Box>
);

Logo.propTypes = {
  url: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

const Footer = () => (
  <FooterContainer>
    <Fade bottom>
      <span>
        <Text
          mb={2}
          pb={1}
          css={{
            textTransform: 'uppercase',
            borderBottom: '#43685d 3px solid',
            display: 'table',
            color: `#64ffda`,
          }}
        >
          Powered By
        </Text>
      </span>
      <Flex justifyContent="center" alignItems="center">
        <Logo
          url="https://www.contentful.com/"
          logo={ContentfulLogo}
          alt="Powered by Contentful"
        />
        <Text m={2} fontSize={4}>
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </Text>
        <Logo
          url="https://www.gatsbyjs.org/"
          logo={GatsbyLogo}
          alt="Gatsby Logo"
        />
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <Text m={2} fontSize={4}>
          <Credit href="https://github.com/MrRobotjs/gh-pages/" target="blank">
            Designed & Built by Christopher Ramos
          </Credit>
        </Text>
      </Flex>
    </Fade>
  </FooterContainer>
);

export default Footer;
