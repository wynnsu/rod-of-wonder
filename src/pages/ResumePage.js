import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../components/Resume/Section';
import Contact from '../components/Resume/Contact';
import { ResumeData } from '../apis/local';
import { palette } from '../utils/color';
import { Editor, EditorState, RichUtils } from 'draft-js';

const Background = styled.section`
    font-family: 'Calibri', sans-serif;
    background-color:${palette.light_primary};
    color:${palette.dark_primary};
    padding:0;
    @media(min-width:768px){
        padding-top:50px;
        padding-bottom:50px;
    }
`;

const Content = styled.div` 
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

const StyledEditor = styled(Editor) `
    color:white;
    border: 2px solid black;
`;

export default class extends Component {
    constructor() {
        super();
        this.state = {
            editorState: EditorState.createEmpty(),
        };
        this.onChange = (editorState) => {
            this.setState({ editorState });
        };
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }
    handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    render() {
        return (
            <Background>
                <Content>
                    <StyledEditor editorState={this.state.editorState} onChange={this.onChange}
                        handleKeyCommand={this.handleKeyCommand} />
                    <Contact data={data.contact} />
                    <Section type='education' data={data.education} />
                    <Section type='project' data={data.project} />
                    <Section type='experience' data={data.experience} />
                    <Section type='skills' data={data.skills} />
                </Content>
            </Background>
        );
    }
}