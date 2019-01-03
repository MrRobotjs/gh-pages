import React, { Fragment } from 'react';
import Headroom from 'react-headroom';
import { Flex, Image } from 'rebass';
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';
import Fade from 'react-reveal/Fade';
import RouteLink from './RouteLink';
import Logo from './Logo/MrRobot.png';

const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${props => props.theme.colors.background};
    box-shadow: rgba(0, 14, 11, 0.9) 0px 2px 4px;
  }

  position: absolute;
  width: 100%;
`;

const ResumeBtn = styled.label`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 16px;
  margin-bottom: 4px;
  margin-left: 2.5rem;
  color: ${props => props.theme.colors.primaryColor};
  cursor: pointer;
`

const Btn = styled.a`
  -webkit-text-decoration: none;
  text-decoration: none;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 5px;
  color: inherit;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  -webkit-scroll-behavior: smooth;
  -moz-scroll-behavior: smooth;
  -ms-scroll-behavior: smooth;
  scroll-behavior: smooth;
  border: 1px solid;
  padding: 0.75rem 1rem;
  line-height: 1;
  border-radius: 2px;
  &:hover {
    background-color: rgba(0, 196, 147, 0.15);
  }
`
const Imagee = styled.img`
  margin: 0 auto;
  @media (min-width: 850px) {
    margin: unset;
    margin-left: 1.2rem;
  }
`

const Flexx = styled.div`
  display: none;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  /*padding: 16px;*/
  label {
    margin-bottom: unset;
  }
  @media (min-width: 850px) {
    display: flex;
    margin-right: 64px;
  }
`

const formatLinks = allLinks =>
  Object.entries(allLinks).reduce(
    (acc, [key, value]) => {
      const isHome = key === 'home';
      return isHome
        ? {
            ...acc,
            home: value,
          }
        : {
            ...acc,
            links: [...acc.links, { name: capitalize(key), value }],
          };
    },
    { links: [], home: null },
  );

const Header = () => (
  <HeaderContainer>
    <Fade top>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <SectionLinks>
          {({ allLinks }) => {
            const { home, links } = formatLinks(allLinks);

            const homeLink = home && (
              <Imagee
                src={Logo}
                width="50px"
                alt="Portfolio Logo"
                onClick={home.onClick}
              />
            );
            const navLinks = links.map(({ name, value }) => (
              <RouteLink
                key={name}
                onClick={value.onClick}
                selected={value.selected}
              >
                {name}
              </RouteLink>
            ));

            return (
              <Fragment>
                {homeLink}
                <Flexx mr={[0, 3, 5]}>
                {navLinks}
                <ResumeBtn><Btn href="https://docs.google.com/document/d/1t1MEK4x3o-WOp8yK2aU1jbu3wN_hmqh0lOeejQ7wCFM/edit?usp=sharing" target="blank">Resume</Btn></ResumeBtn>
                </Flexx>
              </Fragment>
            );
          }}
        </SectionLinks>
      </Flex>
    </Fade>
  </HeaderContainer>
);

export default Header;
