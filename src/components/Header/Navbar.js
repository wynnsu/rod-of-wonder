import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedIn from 'react-icons/lib/fa/linkedin';
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o';
import FaUser from 'react-icons/lib/fa/user';
import {palette} from '../../utils/color';

const Wrapper = styled.header `
    background-color:${palette.dark_secondary};
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
    background-color:${palette.dark_secondary};
`;

const StyledLink = styled(Link)`
    float:left;
    display: block;
    color: ${palette.light_secondary};
    text-align: center;
    padding: 15px 30px;
    text-decoration: none;
    &:hover{
        color:${palette.light_primary};
        background-color:${palette.dark_primary};
    }
`;

const AboutLink = styled(Link)`
    float:right;
    display: block;
    color: ${palette.light_secondary};
    padding: 15px 30px 10px 0;
    size:1.3em;
    &:hover{
        color:${palette.light_primary};
    }
`;

const IconLink = styled.a `
    float:right;
    display: block;
    color: ${palette.light_secondary};
    padding: 15px 30px 10px 0;
    size:1.3em;
    &:hover{
        color:${palette.light_primary};
    }
`;

const Navbar = () => (
    <Wrapper>
        <Menu>
            <StyledLink to={`${process.env.PUBLIC_URL}/`}>
                Home
            </StyledLink>
            <StyledLink to={`${process.env.PUBLIC_URL}/characters`}>
                Characters
            </StyledLink>
            <IconLink href="https://github.com/wynnsu">
                <FaGithub/>
            </IconLink>
            <IconLink href="https://www.linkedin.com/in/wynnsu/?locale=en_US">
                <FaLinkedIn/>
            </IconLink>
            <IconLink href="mailto:wynnsu@gmail.com?Subject=Hello%20Yong!" target="_top">
                <FaEnvelopeO/>
            </IconLink>
            <AboutLink to={`${process.env.PUBLIC_URL}/about`}>
                <FaUser/>
            </AboutLink>
        </Menu>
    </Wrapper>
)

export default Navbar;