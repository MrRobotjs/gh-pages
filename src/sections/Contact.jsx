import React from 'react';
import styled from 'styled-components';

const Email = styled.div`
  -webkit-transition: all 0.25s ease-out;
    transition: all 0.25s ease-out;
    position: fixed;
    right: 2rem;
    display: none;
    top: 40%;
    @media (min-width: 850px) {
        display: block;
    }
`;

const Text = styled.a`
    -webkit-transition: all 0.25s ease-out;
    transition: all 0.25s ease-out;
    writing-mode: vertical-rl;
    text-decoration: unset;
    color: ${props => props.theme.colors.secondaryDarkWhite};
    font-weight: 600;
    position: relative;

    &:hover {
        color: ${props => props.theme.colors.primaryBrightText};
    }
    &::after {
        content: "";
        display: block;
        width: 2px;
        height: 100%;
        background-color: ${props => props.theme.colors.secondaryDarkWhite};
        margin: 0px auto;
        position: fixed;
        top: 83%;
        right: 2.7rem;
    }
`;

const Contact = () => (
    <Email>
        <Text href="mailto:christopher.ramos.00@outlook.com">christopher.ramos.00@outlook.com</Text>
    </Email>
);

export default Contact;
