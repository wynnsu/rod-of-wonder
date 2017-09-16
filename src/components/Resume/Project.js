import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
display: grid;
grid-template-rows: 1fr 1fr auto;
grid-template-columns:repeat(12, 1fr);
grid-template-areas:
"a a a a a a a a b b b b"
"c c c c c c c c c c c c"
"d d d d d d d d d d d d";
grid-row-gap:3px;
margin-bottom:1em;
`;

const Title = styled.div `
    grid-area: a;
`;

const Duration = styled.div `
    grid-area:b;
`;

const School=styled.div`
    grid-area:c;
`;
const Content = styled.div `
    grid-area:d;
`;
const CotentList = styled.ul `
    margin-top:0;
    margin-bottom:0;
`;

class Project extends Component {
    render() {
        const data = this.props.data;
        console.log(this.props);
        return (
            <Wrapper>
                <Title>
                    <b>{data.name}</b>
                </Title>
                <Duration>{data.start}&nbsp;-&nbsp;{data.end
                        ? data.end
                        : 'Present'}</Duration>
                <School>{data.school?data.school:'Side Project'}</School>
                <Content>
                    <CotentList>
                        {data
                            .content
                            .map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                    </CotentList>
                </Content>
            </Wrapper>
        );
    }
}

export default Project;