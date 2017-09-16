import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns:1fr 1fr;
    grid-row-gap:0px;
`;

const Name = styled.h3 `
    margin: 0;
    border-bottom: 1.5px solid black;
`;

class Contact extends Component {
    render() {
        const data = this.props.data;
        console.log(this.props);
        return (
            <div>
                <Name>{data.name}</Name>
                <Wrapper>
                    <div>
                        <b>Address:&nbsp;
                        </b>
                        {data.addr}</div>
                    <div>
                        <b>Phone#:&nbsp;
                        </b>{data.phone}</div>
                    <div>
                        <b>Email:&nbsp;
                        </b>{data.email}</div>
                    <div>
                        <b>Github:&nbsp;
                        </b>{data.github}</div>
                </Wrapper>
            </div>
        );
    }
}

export default Contact;