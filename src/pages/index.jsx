import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Writing from '../sections/Writing';
//import Technologies from '../sections/Technologies';
import Email from '../sections/Email';
import Contact from '../sections/Contact';
import Social from '../sections/Social';

const IndexPage = () => (
  <Layout>
    <Landing />
    <About />
    <Projects />
    <Writing />
    <Email />
    <Contact />
    <Social />
  </Layout>
);

export default IndexPage;
