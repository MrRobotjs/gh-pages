import React from 'react';
import styled from 'styled-components';
import { Box, Card as CardRebass } from 'rebass';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  div[class="react-reveal"] {
    flex-basis: 48%;
  }
  @media only screen and (min-width: 850px) {
    flex-direction: row;
  }
`;

const NewCard = styled(CardRebass)`
  position: relative;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  top: 0;
  background-color: ${props => props.theme.colors.primaryLight};
  color: ${props => props.theme.colors.coloredDarkWhite};
  margin-bottom: 15px;

  &>div {
    flex-direction: column;
    @media (min-width: 850px) {
      flex-direction: row;
    }
  }

  &:hover {
    top: -10px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const Card = ({ children, ...props }) => (
  <Box>
    <NewCard {...props} boxShadow={0}>
      {children}
    </NewCard>
  </Box>
);

export default Card;
