import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Label } from 'rebass';
import TextLoop from 'react-text-loop';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const SubText = styled.div`
  color: ${props => props.theme.colors.coloredDarkWhite};
  width: 100%;
  margin-top: 1rem;
  line-height: 1.75rem;
  margin-bottom: 1rem;
  @media (min-width: 850px) {
    width: calc(100% - 60%);
    margin-bottom: unset;
  }
  a {
    display: inline-block;
    transition: color 250ms, text-shadow 250ms;
    color: ${props => props.theme.colors.primaryColorLight};
    text-decoration: none;
    cursor: pointer;
    position: relative;

    &:after {
      position: absolute;
      z-index: -1;
      bottom: -1px;
      left: 50%;
      transform: translateX(-50%);
      content: '';
      width: 100%;
      height: 3px;
      background-color: ${props => props.theme.colors.primaryColorLight};
      transition: all 250ms;
    }

    &:hover {
      color: black;

      &::after {
        height: 110%;
        width: 110%;
      }
    }
  }
`
const SmallHeader = styled.div`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.theme.colors.primaryColor};
  font-family: "Roboto Mono";
  margin-bottom: 1rem;
  @media (min-width: 850px) {
    margin-bottom: unset;
  }
`
const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondaryDark"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
        }
      `}
      render={data => {
        const { name, socialLinks, roles } = data.contentfulAbout;

        return (
          <Fragment>
            <Fade right>
              <SmallHeader>Hi, my name is</SmallHeader>
            </Fade>
            <Fade bottom>
              <Heading
                textAlign="left"
                is="h1"
                color="White"
                fontSize={[5, 6, 8]}
                mb={[3]}
              >
                {`${name}.`}
              </Heading>

              <Heading
                is="h2"
                color="coloredDarkWhite"
                fontSize={[4, 5, 6]}
                mb={[2, 4]}
                textAlign="left"
              >I make
                <TextLoop>
                  {roles.map(text => (
                    <p style={{ width: "auto", margin: "0 15px"}} key={text}>
                      {text}
                    </p>
                  ))}
                </TextLoop>
                Websites.
              </Heading>
              <SubText>
                I'm a software engineer/web designer based in <a href="https://goo.gl/maps/vBAByYECqVS2" target="blank">Ontario, CA</a> specializing in designing and designing exceptional, high-quality websites and applications for the web. You can get the document version of my resume <a href="https://docs.google.com/document/d/1t1MEK4x3o-WOp8yK2aU1jbu3wN_hmqh0lOeejQ7wCFM/edit?usp=sharing" target="blank">here</a>.
              </SubText>
              <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
                {socialLinks.map(({ id, ...rest }) => (
                  <Label mx={3} fontSize={[5, 6, 6]} key={id}>
                    <SocialLink
                      color="secondaryLight"
                      hoverColor="primaryColor"
                      {...rest}
                    />
                  </Label>
                ))}
              </Flex>
              <MouseIcon />
            </Fade>
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default LandingPage;
