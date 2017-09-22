import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedIn from 'react-icons/lib/fa/linkedin';
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o';
import FaBars from 'react-icons/lib/fa/bars';
import FaUser from 'react-icons/lib/fa/user';
import {palette} from '../../utils/color';

const Menu = styled.ul `
    background-color:${palette.dark_primary};
    padding:0;
    margin:0;
`;

const MenuItem = styled.li `
    display:block;
    padding:0;
    margin:0;
    &:hover{
        color:${palette.light_primary};
        background-color:${palette.dark_secondary};
    }
    & *{
        text-decoration:none;
        color:${palette.light_secondary};
    }
`;

class ToggleNavbar extends Component {
    render() {
        return (
            <div>
                <Menu>
                    <MenuItem>
                        <Link to={`${process.env.PUBLIC_URL}/`}>
                            Home
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to={`${process.env.PUBLIC_URL}/characters`}>
                            Characters
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
                    <MenuItem>
                        <Link to={`${process.env.PUBLIC_URL}/about`}>
                            <FaUser/>
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

export default ToggleNavbar;