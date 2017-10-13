import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {palette} from '../../utils/color';

const Menu = styled.nav `
    font-family: Roboto, sans-serif;
    background-color:${palette.dark_secondary};
    display:flex;
    flex-direction:column;
    @media(min-width: 768px){
        flex-direction:row;
    }
`;
const StyledLink = styled(NavLink)`
    padding: 15px 20px;
    text-decoration: none;
    color:${palette.light_secondary};
    &:hover{
        color:${palette.dark_primary};
        background-color:${palette.light_secondary};
    }
    &.selected{
        background-color:${palette.dark_primary};
    }
    text-align:center;
    @media(min-width:768px){
        padding: 20px 30px;
    }
`;

export default class extends Component {
    render() {
        return (
            <Menu>
                <StyledLink exact={true} to={`${process.env.PUBLIC_URL}/`} activeClassName="selected">
                    Home
                </StyledLink>
                <StyledLink to={`${process.env.PUBLIC_URL}/characters`} activeClassName="selected">
                    Characters
                </StyledLink>
            </Menu>
        )
    }
}