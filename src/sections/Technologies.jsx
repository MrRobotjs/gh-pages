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
  border-bottom: ${props => props.theme.colors.primary} 3px solid;
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

const Technology = ({
  name,
  excerpt,
  projectUrl,
  repositoryUrl,
  type,
  publishedDate,
  logo,
  node
}) => (
  <Card p={0}>
    <Flex>
      <TextContainer>
        <span>
          <Title my={2} pb={1} color="secondaryBrightText">
            {node.name}
          </Title>
        </span>
        <Text width="100%" css={{ overflow: 'visible' }}>
          {excerpt}
        </Text>
      </TextContainer>
      
    </Flex>
  </Card>
);

const Technologies = () => (
  <Section.Container id="technologies" Background={Background}>
    <Section.Header name="Technologies I've Used" icon="💻" label="notebook" />
    <StaticQuery
      query={graphql`
        query TechnologiesQuery {
          allContentfulTechnology {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      `}
      render={({ allContentfulTechnology }) => (
        <CardContainer minWidth="350px">
          {allContentfulTechnology.edges.map((node, i) => (
            <Fade bottom delay={i * 200} key={node.id} >
              <Technology key={node.id} {...node} />
            </Fade>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default Technologies;
