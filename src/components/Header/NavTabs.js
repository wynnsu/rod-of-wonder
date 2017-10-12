import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {palette} from '../../utils/color';

const Wrapper = styled.nav `
    font-family: Roboto, sans-serif;
    background-color:${palette.dark_secondary};
    display:flex;
    flex-direction:column;
    @media(min-width: 768px){
        flex-direction:row;
    }
`;

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: this.props.defaultActiveTabIndex
        };
        this.handleTabClick = this
            .handleTabClick
            .bind(this);
    }
    handleTabClick(tabIndex) {
        this.setState({
            activeTabIndex: tabIndex === this.state.activeTabIndex
                ? this.props.defaultActiveTabIndex
                : tabIndex
        });
    }
    renderChildrenWithTabsApiAsProps() {
        return React
            .Children
            .map(this.props.children, (child, index) => {
                return React.cloneElement(child, {
                    onClick: this.handleTabClick,
                    tabIndex: index,
                    isActive: index === this.state.activeTabIndex
                });
            });
    }
    renderActiveTabContent() {
        const {children} = this.props;
        const {activeTabIndex} = this.state;
        if (children[activeTabIndex]) {
            return children[activeTabIndex].props.children;
        }
    }
    render() {
        return (
            <Wrapper>
                {this.renderChildrenWithTabsApiAsProps()}
            </Wrapper>
        )
    }
}