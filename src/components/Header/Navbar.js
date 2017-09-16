import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedIn from 'react-icons/lib/fa/linkedin';
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o';

const Wrapper = styled.header `
    background-color:#f3f3f3;
    margin:0;
    padding:0;
    font-family: Roboto, sans-serif;
`;

const Menu = styled.nav `
    list-style-type:none;
    margin: 0;
    padding:0;
    overflow:hidden;
    width:100%;
    text-align:left;
    background-color:#333;
`;

const StyledLink = styled(Link)`
    float:left;
    display: block;
    color: #aaa;
    text-align: center;
    padding: 15px 30px;
    text-decoration: none;
    &:hover{
        color:#eee;
        background-color:#111;
    }
    &:active{
        background-color: #000;
    }
`;

const IconLink = styled.a `
    float:right;
    display: block;
    color: #888;
    padding: 15px 30px 10px 0;
    &:hover{
        color:#eee;
    }
`;

const Navbar = () => (
    <Wrapper>
        <Menu>
            <StyledLink to="/">
                Home
            </StyledLink>
            <StyledLink to="/about">
                About
            </StyledLink>
            <StyledLink to="/characters">
                Characters
            </StyledLink>
            <IconLink href="https://github.com/wynnsu">
                <FaGithub size='1.3em'/>
            </IconLink>
            <IconLink href="https://www.linkedin.com/in/wynnsu/?locale=en_US">
                <FaLinkedIn size='1.3em'/>
            </IconLink>
            <IconLink href="mailto:wynnsu@gmail.com?Subject=Hello%20Yong!" target="_top">
                <FaEnvelopeO size='1.3em'/>
            </IconLink>
        </Menu>
    </Wrapper>
)

export default Navbar;