import React from 'react';
import styled from 'styled-components';
import FaGithub from 'react-icons/lib/fa/github';

const Wrapper = styled.footer `
    display:blaock;
    margin:0 auto;
    height:2em;
    background-color:transparent;
    padding:0;
    font-family: Roboto, sans-serif;
`;

const Menu = styled.ul `
    list-style-type:none;
    margin: 0;
    padding:0;
    overflow:hidden;
    width:100%;
`;

const MenuItem = styled.li `
    margin:0 auto;
`;

const StyledLink = styled.a `
    display: block;
    color: #555;
    padding: 10px;
    &:hover{
        color:#000;
    }
`;

const Icon = styled(FaGithub)`
    font-size:2em;
`;

const Footer = () => (
    <Wrapper>

    </Wrapper>
)

export default Footer;