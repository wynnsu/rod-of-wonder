import React, {Component} from 'react';
import styled from 'styled-components';
import Section from '../components/Resume/Section';
import Contact from '../components/Resume/Contact';
import {ResumeData} from '../apis/local';

const Background = styled.div `
font-family: 'Calibri', sans-serif;
padding-top:50px;
padding-bottom:50px;
background-color:#fdfdfd;
color:#111;
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

const data = ResumeData();

class ResumePage extends Component {
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

export default ResumePage;