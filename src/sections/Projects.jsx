import React from 'react';
import { Subhead, Image, Text, Flex, Label } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const Title = styled(Subhead)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${props => props.theme.colors.primaryColor} 3px solid;
`;

const TextContainer = styled.div`
  display: flex;
  /*width: calc(100% - 100px);*/
  flex-direction: column;
  padding: 10px;

  @media (min-width: 850px) {
    width: calc(100% - 200px);
  }
`;

const ImageContainer = styled.div`
  /*width: 100px;*/
  position: relative;

  @media (min-width: 850px) {
    width: 200px;
  }
`;

const ProjectImage = styled(Image)`
  padding: 10px;
  margin-top: 50px;
  height: 100px !important;
  width: 100px;

  @media (min-width: 400px) {
    width: 200px;
    padding: 40px;
    height: 200px !important;
    margin-top: 0px;
  }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  float: right;
  padding: 2px;
  position: absolute;
  top: -6px;
  right: 6px;
`;

const Project = ({
  name,
  excerpt,
  projectUrl,
  repositoryUrl,
  type,
  publishedDate,
  logo
}) => (
  <Card p={0}>
    <Flex>
      <TextContainer>
        <span>
          <Title my={2} pb={1} color="coloredSecondaryWhite">
            {name}
          </Title>
        </span>
        <Text width="100%" css={{ overflow: 'visible' }}>
          {excerpt}
        </Text>
      </TextContainer>
      <ImageContainer>
        <ProjectImage src={logo.image.src} alt={logo.title} />
        <ImageSubtitle bg="secondaryLight" color="white" top="unset" bottom="0px" right="0px" left="unset">
          {type}
        </ImageSubtitle>
        <ImageSubtitle
          bg="backgroundDark"
          invert="true"
          top="0px"
          left="0px"
          bottom="unset"
          right="unset"
        >
          {publishedDate}
        </ImageSubtitle>
        <SocialLinksContainer>
          <Label mx={1} fontSize={5}>
            <SocialLink
              color="coloredDarkWhite"
              hoverColor="primaryColor"
              name="Check repository"
              fontAwesomeIcon="github"
              url={repositoryUrl}
            />
          </Label>
          {projectUrl && 
            <Label mx={1} fontSize={5}>
              <SocialLink
                color="coloredDarkWhite"
                hoverColor="primaryColor"
                fontSize={5}
                mx={1}
                name="See project"
                fontAwesomeIcon="globe"
                url={projectUrl}
              />
            </Label>
          }
        </SocialLinksContainer>
      </ImageContainer>
    </Flex>
  </Card>
);

const Projects = () => (
  <Section.Container id="projects" Background={Background}>
    <Section.Header name="Some Things I've Made" icon="💻" label="notebook" />
    <StaticQuery
      query={graphql`
        query ProjectsQuery {
          contentfulAbout {
            projects {
              id
              name
              excerpt
              projectUrl
              repositoryUrl
              publishedDate(formatString: "YYYY")
              type
              logo {
                title
                image: resize(width: 200, quality: 100) {
                  src
                }
              }
            }
          }
        }
      `}
      render={({ contentfulAbout }) => (
        <CardContainer minWidth="350px">
          {contentfulAbout.projects.map((p, i) => (
            <Fade bottom delay={i * 200} key={p.id} >
              <Project key={p.id} {...p} />
            </Fade>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default Projects;
