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
  filter: hue-rotate(130deg);
  box-shadow: 5px 6px 15px 2px rgba(0, 0, 0, 0.45);

  &:hover {
    border-radius: 20%;
    filter: hue-rotate(0deg);
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
  &>[class="react-reveal"] {
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
  line-height: 2.8rem;
`
const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.coloredWhite};
  margin: unset;
  line-height: 2rem;
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
  flex-wrap: wrap;
`
const List = styled.ul`
  margin: unset;
  list-style-type: none;
`
const Item = styled.li`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${props => props.theme.colors.coloredDarkWhite};
  margin: unset;
  line-height: 1.7em;
  position: relative;
  display: list-item;
  &::before {
    content: "▹";
    position: absolute;
    left: -20px;
    color: ${props => props.theme.colors.primaryColor};
    line-height: 20px;
  }
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
              css={{ maxWidth: '300px', margin: 'auto', position: 'relative' }}
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
                      <Tab>Softwares</Tab>
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
                      <Head>Technologies I've Used</Head><br/>
                      <ListsWrapper>
                        <List>
                          <Item>HTML</Item>
                          <Item>CSS</Item>
                          <Item>SCSS</Item>
                          <Item>Less</Item>
                          <Item>Jekyll</Item>
                        </List>
                        <List>
                          <Item>Bootstrap</Item>
                          <Item>Netlify/CMS</Item>
                          <Item>React</Item>
                          <Item>Liquid</Item>
                          <Item>Gatsbyjs</Item>
                        </List>
                        <List>
                          <Item>GraphQL</Item>
                          <Item>Git</Item>
                          <Item>Javascript</Item>
                          <Item>Node.js</Item>
                          <Item>Python</Item>
                          <Item>C</Item>
                        </List>
                      </ListsWrapper>
                    </TabPanel>
                    <TabPanel>
                      <Head>Softwares I've Used</Head><br/>
                      <ListsWrapper>
                        <List>
                          <Item>Adobe Photoshop</Item>
                          <Item>Adobe XD</Item>
                          <Item>Adobe Illustrator</Item>
                          <Item>Adobe Dreamweaver</Item>
                          <Item>Adobe Flash</Item>
                        </List>
                        <List>
                          <Item>Adobe Sketch</Item>
                          <Item>Adobe Premiere Pro</Item>
                          <Item>All Microsoft Office Programs</Item>
                          <Item>Github</Item>
                        </List>
                      </ListsWrapper>
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
