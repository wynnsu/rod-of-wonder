import React, {Component} from 'react';
import styled from 'styled-components';
import {palette} from '../../utils/color';

const Wrapper = styled.div `
    font-family: 'Calibri', sans-serif;
    padding-top:50px;
    padding-bottom:50px;
    display:flex;
    flex-direction:column;
    flex:1;
`;

const Content = styled.div ` 
    display:flex;
    justify-content:center;
    padding: 50px;
    @media(max-width: 768px){
        margin: 60vw 0 0 0;
        padding: 20px 20px 20px 20px;
        width: 100%;
    }
`;

const Avatar = styled.img `
    border-radius:50%;
    width:256px;
    margin:48px;
`;

const TitleWrapper = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:center;
`

const Name = styled.span `
    font-size:36px;
    font-weight:bold;
    color:${palette.primary};
`;

const Hr = styled.hr `
    border:none;
    height:1px;
    color:black;
    background-color:black;
`;

class CharacterSheet extends Component {
    render() {
        const data = this.props.data;
        return (
            <Wrapper wallpaper={data.full}>
                <Content>
                    <Avatar src={data.avatar} alt={data.name}/> {data.nickname === 'Sully'
                        ? <TitleWrapper>
                                <Name>{data.name}</Name>
                                <Hr/>
                                <span>
                                    <b>Alignment&nbsp;</b>{data.alignment}&nbsp;&nbsp;<b>Gender&nbsp;</b>{data.gender}&nbsp;&nbsp;<b>Race&nbsp;</b>{data.race}
                                </span>
                                <span>
                                    <b>Class</b>&nbsp;{Object
                                        .keys(data.class)
                                        .map(k => k + ' ' + data.class[k].toString())}</span>
                                <span>
                                    <b>Deity</b>&nbsp;{data.deity}&nbsp;&nbsp;<b>Faction</b>&nbsp;{data.faction}&nbsp;&nbsp;<b>Day job&nbsp;</b>{data.dayjob || 'none'}</span>
                                <span>
                                    <b>Age</b>&nbsp;{data.age}&nbsp;&nbsp;<b>Height</b>&nbsp;{data.height}&nbsp;&nbsp;<b>Weight</b>&nbsp;{data.weight}</span>
                                <span>
                                    <b>Init</b>&nbsp;+{data.initiative.total}&nbsp;&nbsp;<b>Speed</b>&nbsp;{data.speed.land}&nbsp;&nbsp;<b>Sense</b>&nbsp;+{data.skills[1].total}</span>
                                <span>
                                    <b>Languages</b>&nbsp;{data
                                        .skills[10]
                                        .content
                                        .map(lang => lang.toString() + ' ')}</span>
                            </TitleWrapper>
                        : <TitleWrapper>
                            <Name>{data.name}</Name>
                            <Hr/>
                            <span>To be continue</span>
                        </TitleWrapper>
}
                </Content>
            </Wrapper>
        )
    }
}

export default CharacterSheet;