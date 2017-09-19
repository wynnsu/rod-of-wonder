import React, {Component} from 'react';
import styled from 'styled-components';
import {palette} from '../../utils/color';

const Wrapper = styled.div `
    font-family: 'Calibri', sans-serif;
    padding-top:50px;
    padding-bottom:50px;
`;

const Content = styled.div ` 
    margin-left:auto;
    margin-right:auto;
    max-width: 768px;
    min-width: 300px;
    padding: 50px 50px 50px 50px;
    box-sizing:border-box;
    @media(max-width: 768px){
        margin: 60vw 0 0 0;
        padding: 20px 20px 20px 20px;
        width: 100%;
    }
`;

const Avatar = styled.img `
    border-radius:50%;
    width:150px;
`;

class CharacterSheet extends Component {
    render() {
        return (
            <Wrapper wallpaper={this.props.data.full}>
                <Content>
                    <Avatar src={this.props.data.avatar} alt={this.props.data.name}/> 
                    <span inline color={palette.primary}>{this.props.data.nickname}</span>
                </Content>
            </Wrapper>
        )
    }
}

export default CharacterSheet;