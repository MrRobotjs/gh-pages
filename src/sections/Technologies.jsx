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
      color="secondary"
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
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  width: calc(100% - 100px);
  flex-direction: column;
  padding: 10px;

  @media (min-width: 400px) {
    width: calc(100% - 200px);
  }
`;

const ImageContainer = styled.div`
  width: 100px;
  position: relative;

  @media (min-width: 400px) {
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

const Technologies = () => (
  <Section.Container id="Technologies" Background={Background}>
    <Section.Header name="Technologies" icon="<>" label="code" />
  </Section.Container>
);

export default Technologies;
