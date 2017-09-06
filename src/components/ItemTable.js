import React, {Component} from 'react';
import styled from 'styled-components';
import EffectTable from './EffectTable';
import Color from 'color';

const data = require('../utils/effect-tables/rod-of-wondrous.json');
//#BF6A21
const colorDark = Color('#BF6A21').string();
//#ECE5B3
const colorLight = Color('#ECE5B3').string();

const ItemWrapper = styled.div `
    display: grid;
    grid-template-rows: 1fr 1.5fr 2fr;
    grid-template-columns:3fr 1fr 1.5fr;
    grid-row-gap:2px;
    grid-column-gap:2px;
    background-color:${colorDark};
    border: 2px solid ${colorDark};
    margin-bottom:2px;
    `;
const ItemBox = styled.div `
    background-color:${colorLight};
    display: flex;
    align-items: center;
    justify-content: start;
    color: ${colorDark};
    font-size:medium;
    padding-left:5%;
    @media (max-width: 768px){
        font-size:small;
    }
    `;
const PriceWrapper = styled.div `
    display:subgrid;
    grid-template-rows:1fr 1.5fr;
    background-color:white;
    grid-row:1/span 2;
    font-size:large;
    @media (max-width: 768px){
        font-size:medium;
    }
`;
const PriceBox = ItemBox.extend `
    background-color:white;
    justify-content: center;
    align-content: center;
    font-weight: bold;
    font-size:large;
    @media (max-width: 768px){
        font-size:medium;
    }
`;
const PriceTitle = PriceBox.extend `
    font-size:medium;
    @media (max-width: 768px){
        font-size:small;
    }
`;
const TitleBox = ItemBox.extend `
    text-transform:uppercase;
    grid-column: 1/span 2;
    grid-row:1/span 2;
    justify-content:start;
    color:${colorLight};
    font-size: xx-large;
    background-color:${colorDark};
    font-weight:bold;
    @media (max-width: 768px){
        font-size:x-large;
    }
`;
const Description = styled.p `
    text-align:justify;
`;
class ItemTable extends Component {
    render() {
        return (
            <div>
                <ItemWrapper>
                    <TitleBox>{this.props.title}</TitleBox>
                    <PriceWrapper>
                        <PriceTitle>PRICE</PriceTitle>
                        <PriceBox>
                            {this.props.price}&nbsp;GP
                        </PriceBox>
                    </PriceWrapper>
                    <ItemBox>
                        <b>AURA&nbsp;</b>{this.props.aura}</ItemBox>
                    <ItemBox>
                        <b>CL&nbsp;</b>{this.props.cl}</ItemBox>
                    <ItemBox>
                        <b>WEIGHT&nbsp;</b>{this.props.weight}</ItemBox>
                </ItemWrapper>
                <Description>
                    A rod of wonder is a strange and unpredictable device that randomly generates
                    any number of weird effects each time it is used.Activating the rod is a
                    standard action.Typical powers of the rod include the following.
                </Description>
                <EffectTable rows={data} borderColor={colorDark}/>
            </div>
        );
    }
}

export default ItemTable;