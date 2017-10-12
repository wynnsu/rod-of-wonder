import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedIn from 'react-icons/lib/fa/linkedin';
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o';
import FaUser from 'react-icons/lib/fa/user';
import {palette} from '../../utils/color';

const Wrapper = styled.footer `
    background-color:${palette.dark_secondary};
    font-family: Roboto, sans-serif;
`;
const Menu = styled.ul `
    list-style-type:none;
    display:block;
    overflow:hidden;
    text-align:center;
    padding:0;
    margin:0;
`;

const MenuItem = styled.li `
    display:inline;
    padding:0;
    margin:0;
    width:25%;
    &:hover {
        & *{
            color:${palette.dark_secondary};
            background-color:${palette.light_secondary};
        }
    }
    & *{
        font-size:25px;
        text-decoration:none;
        padding:10px 15px;
        color:${palette.light_secondary};
    }
    @media(min-width:768px){
        &*{
            font-size:2em;
        }
    }
`;

export default class extends Component {
    render() {
        return (
            <Wrapper>
                <Menu>
                    <MenuItem>
                        <Link to={`${process.env.PUBLIC_URL}/about`}>
                            <FaUser/>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <a href="https://github.com/wynnsu">
                            <FaGithub/>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="https://www.linkedin.com/in/wynnsu/?locale=en_US">
                            <FaLinkedIn/>
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="mailto:wynnsu@gmail.com?Subject=Hello%20Yong!" target="_top">
                            <FaEnvelopeO/>
                        </a>
                    </MenuItem>
                </Menu>
            </Wrapper>
        );
    }
}