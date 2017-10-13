import React, {Component} from 'react';
import styled from 'styled-components';
import Section from '../components/Resume/Section';
import Contact from '../components/Resume/Contact';
import {ResumeData} from '../apis/local';
import {palette} from '../utils/color'

const Background = styled.section `
    font-family: 'Calibri', sans-serif;
    background-color:${palette.light_primary};
    color:${palette.dark_primary};
    padding:0;
    @media(min-width:768px){
        padding-top:50px;
        padding-bottom:50px;
    }
`;

const Content = styled.div ` 
    margin-left:auto;
    margin-right:auto;
    max-width: 768px;
    min-width: 300px;
    padding:0;
    box-sizing:border-box;
    @media(min-width: 768px){
        padding: 20px;
        width: 100%;
    }
`;

const data = ResumeData();

export default class extends Component {
    render() {
        return (
            <Background>
                <Content>
                    <Contact data={data.contact}/>
                    <Section type='education' data={data.education}/>
                    <Section type='project' data={data.project}/>
                    <Section type='experience' data={data.experience}/>
                    <Section type='skills' data={data.skills}/>
                </Content>
            </Background>
        );
    }
}