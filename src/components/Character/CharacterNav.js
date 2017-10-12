import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {palette} from '../../utils/color';

const Wrapper = styled.header `
    font-family: Roboto, sans-serif;
`;

const Menu = styled.nav `
    list-style-type:none;
    overflow:hidden;
    width:100%;
    text-align:left;
    display:flex;
    flex-direction:column;
    @media(min-width:768px){
        flex-direction:row;
    }
`;

const StyledLink = styled(Link)`
    color: ${palette.dark_primary};
    text-align: center;
    padding: 15px 30px;
    text-decoration: none;
    &:hover{
        transform:scale(1.1);
    }
`;

const Avatar = styled.img `
    border-radius:50%;
    width:150px;
`;
export default class extends Component {
    render() {
        return (
            <Wrapper>
                <Menu>
                    {this
                        .props
                        .data
                        .map((item) => (
                            <StyledLink to={`${this.props.baseurl}/${item.id}`} key={item.id}>
                                <Avatar src={item.data.avatar} alt={item.data.nickname}/>
                                <h4>{item.data.name}</h4>
                            </StyledLink>
                        ))}
                </Menu>
            </Wrapper>
        );
    }
}