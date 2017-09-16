import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
display: grid;
grid-template-rows: 1fr auto;
grid-template-areas:
"a"
"b";
grid-row-gap:3px;
margin-bottom:1em;
`;

const Title = styled.div `
    grid-area: a;
`;

const Content = styled.div `
    grid-area:b;
`;
const CotentList = styled.ul `
    margin-top:0;
    margin-bottom:0;
`;

class Skills extends Component {
    render() {
        const data = this.props.data;
        console.log(this.props);
        return (
            <Wrapper>
                <Title>
                    <b>{data.category}</b>
                </Title>
                <Content>
                    <CotentList>
                        {data
                            .content
                            .map((item, index) => (item.length > 1
                                ? <li key={index}>
                                        <b>{item[0]}:&nbsp;</b>{item[1]}</li>
                                : <li key={index}>{item}</li>))}
                    </CotentList>
                </Content>
            </Wrapper>
        );
    }
}

export default Skills;