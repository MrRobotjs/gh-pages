import React from 'react';
import styled from 'styled-components';

const SocialWrapper = styled.div`
  -webkit-transition: all 0.25s ease-out;
    transition: all 0.25s ease-out;
    position: fixed;
    left: 2.7rem;
    display: none;
    top: 62%;
    flex-direction: column;
    @media (min-width: 850px) {
        display: flex;
    }
    &::after {
        content: "";
        display: block;
        width: 2px;
        height: 100%;
        background-color: ${props => props.theme.colors.coloredDarkWhite};
        margin: 0px auto;
        position: fixed;
        top: 85%;
        left: 3.35rem;
    }
`;

const Url = styled.a`
    -webkit-transition: all 0.25s ease-out;
    transition: all 0.25s ease-out;
    writing-mode: vertical-rl;
    text-decoration: unset;
    color: ${props => props.theme.colors.coloredDarkWhite};
    font-weight: 600;
    position: relative;
    display: block;
    margin-top: 1.2rem;

    &:hover {
        color: #379bad;
    }
`;

const Icon = styled.div`
    display: block;
    width: 1.4rem;
    svg {
        width: 1.4rem;
        fill: ${props => props.theme.colors.coloredDarkWhite};
        height: auto;
        transition: all 0.25s ease-out;
        &:hover {
            fill: ${props => props.theme.colors.primaryColor};
        }
    }
`;

const Social = () => (
    <SocialWrapper>
        <Url href="https://github.com/MrRobotjs" target="blank">
            <Icon>
                <svg width='1024' height='1024' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path fillRule='evenodd' clipRule='evenodd' d='M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z' transform='scale(64)' />
                </svg>
            </Icon>
        </Url>
        <Url href="https://www.linkedin.com/in/christopher-ramos-86869b162/" target="blank">
            <Icon>
                <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' width='430.117' height='430.117' viewBox='0 0 430.117 430.117'>
                    <path id='LinkedIn' d='M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z'
                    />
                </svg>
            </Icon>
        </Url>
        <Url href="mailto:christopher.ramos.00@outlook.com">
            <Icon>
                <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' width='612' height='612' viewBox='0 0 612 612'>
                    <path d='M306.768,346.814h0.131c4.615,0,9.176-1.339,12.866-3.777l1.001-0.643c0.218-0.142,0.446-0.271,0.675-0.424l11.658-9.645 l278.259-229.624c-0.576-0.795-1.557-1.339-2.602-1.339H3.233c-0.751,0-1.448,0.272-2.003,0.729l291.125,239.954 C296.024,345.083,301.259,346.814,306.768,346.814z M0,133.899v340.37l208.55-168.471L0,133.899z M403.668,306.941L612,474.356 V135.031L403.668,306.941z M337.431,361.585c-8.305,6.814-19.168,10.57-30.576,10.57c-11.451,0-22.304-3.734-30.587-10.516 l-47.765-39.394L0,506.806v0.587c0,1.753,1.502,3.244,3.276,3.244h605.491c1.741,0,3.232-1.491,3.232-3.255v-0.544L383.693,323.4 L337.431,361.585z'
                    />
                </svg>
            </Icon>
        </Url>
    </SocialWrapper>
);

export default Social;
