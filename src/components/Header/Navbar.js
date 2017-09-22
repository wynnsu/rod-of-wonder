import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {palette} from '../../utils/color';
import FaBars from 'react-icons/lib/fa/bars';

const Menu = styled.nav `
    display:block;
    font-family: Roboto, sans-serif;
    list-style-type:none;
    overflow:hidden;
    width:100%;
    text-align:center;
    background-color:${palette.dark_secondary};
    margin:auto;    
    @media(min-width: 768px){
        padding: 0;
        width: 100%;
        display:block;
      };
`;
const MenuItem = styled.a `
    display:block;
    cursor:pointer;
    padding: 15px 30px;
    &:hover{
        & *{
            color:${palette.dark_primary};
        }
        background-color:${palette.light_secondary};
    }
    & *{
        text-decoration: none;    
        color: ${palette.light_secondary};  
        text-align: center;
    }
    @media(min-width: 768px){
        float:left;
    }
`;
const StyledLink = styled(Link)`
    display:block;
    padding: 15px 30px;
    text-decoration: none;    
    color: ${palette.light_secondary};  
    text-align: center;
    &:hover{
        color:${palette.dark_primary};
        background-color:${palette.light_secondary};
    }
    @media(min-width: 768px){
        float:left;
    }
`;

export default class ToggleNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
        this.handleToggle = this
            .handleToggle
            .bind(this);
    }

    handleToggle() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <Menu>
                <MenuItem onClick={this.handleToggle}>
                    <FaBars/>
                </MenuItem>
                {this.state.isToggleOn && <section>
                    <StyledLink to={`${process.env.PUBLIC_URL}/`}>
                        Home
                    </StyledLink>
                    <StyledLink to={`${process.env.PUBLIC_URL}/characters`}>
                        Characters
                    </StyledLink>
                </section>}
            </Menu>
        )
    }
}