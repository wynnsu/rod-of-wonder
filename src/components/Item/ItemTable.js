import React, {Component} from 'react';
import styled from 'styled-components';
import EffectTable from './EffectTable';
import {palette} from '../../utils/color';

const ItemWrapper = styled.div `
    display: grid;
    grid-template-rows: 1fr 1.5fr 2fr;
    grid-template-columns:3fr 1fr 1.5fr;
    grid-row-gap:2px;
    grid-column-gap:2px;
    background-color:${palette.dark};
    border: 2px solid ${palette.dark};
    margin-bottom:2px;
    `;
const ItemBox = styled.div `
    background-color:${palette.light};
    display: flex;
    align-items: center;
    justify-content: start;
    color: ${palette.dark};
    font-size:medium;
    padding-left:5%;
    @media (max-width: 768px){
        font-size:small;
    }
    `;
const PriceWrapper = styled.div `
    display:subgrid;
    grid-template-rows:1fr 1.5fr;
    background-color:${palette.light_primary};
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
    color:${palette.light};
    font-size: xx-large;
    background-color:${palette.dark};
    font-weight:bold;
    @media (max-width: 768px){
        font-size:x-large;
    }
`;
const Description = styled.p `
    text-align:justify;
    color:${palette.dark_primary};
`;
export default class extends Component {
    render() {
        return (
            <div>
                <ItemWrapper>
                    <TitleBox>{this.props.itemdata.title}</TitleBox>
                    <PriceWrapper>
                        <PriceTitle>PRICE</PriceTitle>
                        <PriceBox>
                            {this.props.itemdata.price}&nbsp;GP
                        </PriceBox>
                    </PriceWrapper>
                    <ItemBox>
                        <b>AURA&nbsp;</b>{this.props.itemdata.aura}</ItemBox>
                    <ItemBox>
                        <b>CL&nbsp;</b>{this.props.itemdata.cl}</ItemBox>
                    <ItemBox>
                        <b>WEIGHT&nbsp;</b>{this.props.itemdata.weight}</ItemBox>
                </ItemWrapper>
                <Description>
                    {this.props.itemdata.description}
                </Description>
                <EffectTable rows={this.props.effectdata}/>
            </div>
        );
    }
}