import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
display: grid;
grid-template-rows: repeat(3,1fr);
grid-template-columns:repeat(12, 1fr);
grid-template-areas:
"a a a a a a a a d d d d"
"z b b c c c c c c c c c"
"z e e f f f f f f f f f"
"x x x x x x x x x x x x";
grid-row-gap:3px;
margin-bottom:1em;
`;

const School = styled.div `
    grid-area: a;
`;

const DegreeTitle = styled.div `
    grid-area:b;
`;
const HonorTitle = styled.div `
    grid-area:e;
`;

const Honors = styled.div `
    grid-area:f;
`;

const Degree = styled.div `
    grid-area:c;
`;

const Duration = styled.div `
    grid-area:d;
`;

class Education extends Component {
    render() {
        const data = this.props.data;
        return (
            <Wrapper>
                <School>
                    <b>{data.school},</b>&nbsp;{data.city},&nbsp;{data.state
                        ? data.state
                        : data.country}
                </School>
                <DegreeTitle>Degree:</DegreeTitle>
                <Degree>{data.degree}&nbsp;{data.gpa
                        ? <b>(GPA:&nbsp;{data.gpa})</b>
                        : ''}
                </Degree>
                <Duration>{data.start}&nbsp;-&nbsp;{data.end}</Duration>
                <HonorTitle>Honors:</HonorTitle>
                <Honors>{data.honors}</Honors>
            </Wrapper>
        );
    }
}

export default Education;