import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Provider as RebassProvider } from 'rebass';
import PropTypes from 'prop-types';
import { ScrollingProvider } from 'react-scroll-section';
import 'react-tippy/dist/tippy.css';
import config from 'react-reveal/globals';
import theme from '../theme';
import Helmet from './Helmet';
import Header from './Header';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }

body {
  margin: 0;
  font-family: Cabin;
  overflow-x: hidden;
  background-color: #0a2f2a;
  counter-reset: links headers;
}
`;

config({ ssrFadeout: true });

const LayoutPage = ({ children }) => (
  <Fragment>
    <GlobalStyle />
    <RebassProvider theme={theme}>
      <ScrollingProvider>
        <Helmet />
        <Header />
        {children}
        <Footer />
      </ScrollingProvider>
    </RebassProvider>
  </Fragment>
);

LayoutPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutPage;
