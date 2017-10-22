import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import styled from 'styled-components';

const Wrapper = styled.div`
    border:1px solid grey;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    width: 700px;
`;

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
        this.onChange = (editorState) => this.setState({ editorState });
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
    _onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }

    render() {
        return (
            <Wrapper>
                <Editor
                    editorState={this.state.editorState}
                    handleKeyCommand={this.handleKeyCommand}
                    onChange={this.onChange}
                />
            </Wrapper>
        );
    }
}