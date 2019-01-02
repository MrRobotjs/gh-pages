import * as React from 'react';
import styled from 'styled-components';
import { Section } from 'react-scroll-section';
import { Heading } from 'rebass';
import PropTypes from 'prop-types';
import Slide from 'react-reveal/Slide';

const SectionContainer = styled.div`
  /*min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;*/
  display: flex;
  margin: 0 1rem;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 9rem 1rem;
  scroll-behavior: smooth;
  @media (min-width: 850px) {
    margin: 0 7rem;
  }
`;

const DefaultBackground = () => <div />;

const Container = ({
  id,
  children,
  Background = DefaultBackground,
  css = {},
}) => (
  <Section id={id} style={{ position: 'relative' }}>
    <Background />
    <SectionContainer style={css}>{children}</SectionContainer>
  </Section>
);

Container.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line
  css: PropTypes.object,
  Background: PropTypes.func,
};

const LinkAnimated = styled.span`
  text-decoration: none;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 5px;
  color: ${props => props.theme.colors.secondaryBrightText};
  border-bottom: ${props =>
    `${props.borderWidth} dashed ${props.theme.colors.primaryLight}`};
  transition: 0.4s;

  &::before {
  counter-increment: headers;
  content: '0'counter(headers)'.';
  margin-right: 7px;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.primary};
  font-family: 'Roboto Mono';
  }

  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: -${props => props.borderWidth};
    background: ${props => props.theme.colors.secondaryDark};
    height: ${props => props.borderWidth};
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  &:hover:after {
    left: 0;
    right: auto;
    width: 100%;
  }
`;

const Header = ({ name, icon = '', label = '' }) => (
  <Slide left>
    <Heading color="secondaryDark" mb={4} className={name}>
      <LinkAnimated borderWidth="5px">
        {name}
        {icon && (
          <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
            {icon}
          </span>
        )}
      </LinkAnimated>
    </Heading>
  </Slide>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string,
};

export default {
  Container,
  Header,
};
