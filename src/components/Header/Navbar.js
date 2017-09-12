import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Color from 'color';

const Background = styled
    .div `
    background-color:${Color(`#f3f3f3`)
    .string()};
    margin:0;
    padding:0;
    font-family: Roboto, sans-serif;
`;

const Menu = styled.ul `
    list-style-type:none;
    margin: 0;
    padding:0;
    overflow:hidden;
    width:100%;
    text-align:left;
    background-color:#333;
`;

const MenuItem = styled.li `
    float:left;
`;

const StyledLink = styled(Link)`
    display: block;
    color: white;
    text-align: center;
    padding: 20px 40px;
    text-decoration: none;
    &:hover{
        background-color:#222;
    }
`;

const Navbar = () => (
    <Background>
        <Menu>
            <MenuItem>
                <StyledLink to="/">
                    Home
                </StyledLink>
            </MenuItem>
            <MenuItem>
                <StyledLink to="/about">
                    About
                </StyledLink>
            </MenuItem>
            <MenuItem>
                <StyledLink to="/topics">
                    Topics
                </StyledLink>
            </MenuItem>
            <MenuItem>
                <StyledLink to="/rod-of-wonder">
                    Rod of wonder
                </StyledLink>
            </MenuItem>
        </Menu>
    </Background>
)

export default Navbar;