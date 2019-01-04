import React from 'react';
import { Box, Image, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import "../styles/Tabs.css";

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

const TabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 90%;
  overflow: hidden;
  @media (min-width: 850px) {
    flex-basis: 70%;
  }
  [class="react-reveal"] {
    overflow: hidden;
  }
`
const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`
const Head = styled.p`
  font-size: 2.3rem;
  font-weight: bold;
  color: ${props => props.theme.colors.White};
  margin: unset;
  line-height: 1.7rem;
  @media (min-width: 850px) {
    line-height: 1.8rem;
  }
`
const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.coloredWhite};
  margin: unset;
  line-height: 1.6rem;
  @media (min-width: 850px) {
    line-height: 1.8rem;
  }
`
const At = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primaryColor};
  transition: 250ms linear;
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
        width: 102.5%;
      }
    }
`
const Date = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${props => props.theme.colors.coloredDarkWhite};
  margin: unset;
  line-height: 2rem;
  @media (min-width: 850px) {
    line-height: 1.7rem;
  }
`
const ListsWrapper = styled.div`
  display: flex;
`
const List = styled.ul`
  margin: unset;
`
const Item = styled.li`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${props => props.theme.colors.coloredDarkWhite};
  margin: unset;
  line-height: 1.7em;
`

const About = () => (
  <Section.Container id="about" Background={Background}>
    <Section.Header name="About me" icon="🙋‍♂️" label="person" />
    <StaticQuery
      query={graphql`
        query AboutMeQuery {
          about:contentfulAbout {
            aboutMe {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            profile {
              title
              image: resize(width: 450, quality: 100) {
                src
              }
            }
          }
        }
      `}
      render={data => {
        const { aboutMe, profile, test } = data.about;
        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap" color="coloredDarkWhite">
            <Box width={[1, 1, 4 / 6]}>
              <Fade bottom>
                <ReactMarkdown
                  source={aboutMe.childMarkdownRemark.rawMarkdownBody}
                  renderers={markdownRenderer}
                />
              </Fade>
              
            </Box>

            <Box
              width={[1, 1, 2 / 6]}
              css={{ maxWidth: '300px', margin: 'auto' }}
            >
              <Fade right>
                <ProfilePicture
                  src={profile.image.src}
                  alt={profile.title}
                  mt={[4, 4, 0]}
                  ml={[0, 0, 1]}
                />
              </Fade>
            </Box>
              <TabWrapper>
                <Fade Bottom>
                  <Tabs defaultIndex={0} onSelect={index => console.log(`Tab number ` + index + ` has been opened`)}>
                    <TabList>
                      <Tab>Education</Tab>
                      <Tab>Expereience</Tab>
                      <Tab>Technologies</Tab>
                    </TabList>

                    <TabPanel>
                      <Header>
                        <Title>CS Bachelor's Degree <At href="https://www.mtsac.edu/" target="blank"> @ Mt. SAC</At></Title>
                        <Date><b>Ongoing</b> 2019 - 2025</Date>
                      </Header>
                      <Header>
                        <Title>High School Diploma <At href="https://goo.gl/maps/s3vaStfxg9E2" target="blank"> @ Ontario High School</At></Title>
                        <Date>From 2014 - 2018</Date>
                      </Header>
                    </TabPanel>
                    <TabPanel>
                      <Head>Where I've Worked</Head>
                      <Header>
                        <Title>Cashier / Busser Boy <At href="https://www.juicysfood.com/" target="blank"> @ Juicy's Food</At></Title>
                        <Date>From 2018 - 2018</Date>
                      </Header>
                      <p>Responsibilities:</p>
                      <ListsWrapper>
                        <List>
                          <Item>Cashier</Item>
                          <Item>Attending Customers</Item>
                          <Item>Cleaned Floors</Item>
                        </List>
                        <List>
                          <Item>Managed Other Cashiers</Item>
                          <Item>Cleaned Tables</Item>
                          <Item>Washed Dishes</Item>
                        </List>
                      </ListsWrapper>
                    </TabPanel>
                    <TabPanel>
                      <Head>Technologies I've Used</Head>
                    </TabPanel>
                  </Tabs>
                </Fade>
              </TabWrapper>
          </Flex>
        );
      }}
    />
  </Section.Container>
);

export default About;
