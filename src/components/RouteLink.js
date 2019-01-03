import React from 'react';
import { Label } from 'rebass';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LinkAnimated = styled.span`
  text-decoration: none;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 5px;
  color: inherit;
  border-bottom: ${props => `${props.borderWidth} solid transparent`};
  border-bottom-color: ${props =>
    props.selected && props.theme.colors.primaryColorDark};
  transition: 0.4s;
  scroll-behavior: smooth;
  color: ${props => props.theme.colors.coloredDarkWhite};
  color: ${props =>
    props.selected && props.theme.colors.primaryColor};
  font-size: 1rem;

  &::before {
    counter-increment: links;
    content: '0'counter(links)'.';
    margin-right: 7px;
    color: ${props => props.theme.colors.primaryColor};
    font-family: 'Roboto Mono';
    position: absolute;
    left: -34px;
  }

  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: -${props => props.borderWidth};
    background: ${props => props.theme.colors.secondaryLight};
    background: ${props =>
    props.selected && props.theme.colors.primaryColorDark};
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

const RouteLink = ({ onClick, selected, children }) => (
  <Label
    ml={[3, 5]}
    color="background"
    fontSize={[2, 3]}
    css={{ cursor: 'pointer' }}
  >
    <LinkAnimated onClick={onClick} selected={selected} borderWidth="3px">
      {children}
    </LinkAnimated>
  </Label>
);

RouteLink.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  children: PropTypes.node,
};

export default RouteLink;
