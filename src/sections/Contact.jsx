import React from 'react';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondaryDark"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const TextHeader = styled.div`
    font-size: 3rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
    margin-bottom: 2rem;
`

const SubText = styled.div`
    font-size: 1rem;
    color: ${props => props.theme.colors.coloredDarkWhite};
    text-align: center;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 1.5rem;
    @media (min-width: 850px) {
        width: calc(100% - 50%);
    }
`

const ContactWrapper = styled.div`
    display: flex;
`

const ContactBtn = styled.a`
    font-size: 1rem;
    color: ${props => props.theme.colors.primaryColor};
    text-align: center;
    margin: 0 auto;
    border: 1px solid;
    padding: 1.1rem 1.4rem;
    display: inline-block;
    text-decoration: none;
    transition: all 250ms;
    border-radius: 2px;
    &:hover {
        background-color: rgba(0, 196, 147, 0.15);
    }
`

const Contact = () => (
  <Section.Container id="contact" Background={Background}>
    <Section.Header name="What's Next?" icon="📧" label="contact"/>
    <Fade bottom>
      <TextHeader>Get In Touch</TextHeader>
      <SubText>Although I'm not currently looking for any freelance opportunities, my inbox is always open to work opportunities or open-source projects. Whether for a potential job or just to say hi, I'll try my best to answer your email and get back to you as soon as possible!</SubText>
      <ContactWrapper>
          <ContactBtn href="mailto:christopher.ramos.00@outlook.com">Hire Me or Say Hello!</ContactBtn>
      </ContactWrapper>
    </Fade>
  </Section.Container>
);

export default Contact;
