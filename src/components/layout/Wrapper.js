import React, {Component} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styled from 'styled-components';

const Body = styled.div `
    display:flex;
    min-height:100vh;
    flex-direction:column;
`;

const Header = styled(Navbar)`
    flex:1;
    height:300px;
`;

const Main = styled.main `
    flex:1;
`;

const StyledFooter = styled(Footer)`
    flex:1;
    height:150px;
`;

export default class extends Component {
    render() {
        return (
            <Body>
                <Header/>
                <Main>
                    {this.props.children}
                </Main>
                <StyledFooter/>
            </Body>
        )
    }
}