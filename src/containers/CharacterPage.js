import React, {Component} from 'react';
import styled from 'styled-components';
import Avatar from './images/Sully.png';

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

class ResumePage extends Component {
    render() {
        return (
            <Wrapper>
                <Content>
                    <img src={Avatar} alt='Sully Lightfoot'/>
                    Sully Lightfoot
                </Content>
            </Wrapper>
        );
    }
}

export default ResumePage;