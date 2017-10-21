import React from 'react';
import styled from 'styled-components';

const LeftSpan=styled.span`
    border-radius:1em 0 0 1em;
    padding:0.5em;
    background-color:pink;
`;
const RightSpan=LeftSpan.extend`
    border-radius:0 1em 1em 0;
    background-color:yellow;
`;

const CharacterItem = (props) => {
    return (
        <span key={props.key}>
            <LeftSpan><b style={{
                textTransform: 'capitalize'
            }}>{props.name}&nbsp;</b></LeftSpan><RightSpan>{props.data === ''
                ? 'none'
                : props.data}&nbsp;&nbsp;</RightSpan></span>
    );
}

const CharacterSection = (props) => {
    return (
        <section>
            <span>{props.title}</span>
            <hr/>
            <p>
                {props
                    .items
                    .map((item, index) => {
                        return CharacterItem({key: index, name: item.name, data: item.data});
                    })}
            </p>
        </section>
    );
}

export default CharacterSection;